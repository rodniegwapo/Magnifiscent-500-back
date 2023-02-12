<?php

namespace App\Http\Requests\PackageCode\Admin;

use App\Helpers\DatabaseHelper;
use Illuminate\Foundation\Http\FormRequest;

class Index extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'page' => 'required|integer',
            'limit' => 'nullable|integer|min:5|max:100',
            'user_id' => 'nullable|integer|exists:users,id',
            'account_id' => 'nullable|integer|exists:accounts,id',
            'seller_id' => 'nullable|integer',
            'claimed' => 'nullable|boolean',
            'order_by' => 'nullable|string',
            'order_desc' => 'required_with:order_by|boolean'
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($this->seller_id) {
                $seller = app('User')->find($this->seller_id);
                if (! $seller || ($seller && $seller->role->slug !== 'seller')) {
                    $validator->errors()->add('seller_id', 'The selected seller id is invalid.');
                }
            }
            if ($this->sort_by && ! DatabaseHelper::columnExisted('package_codes', $this->sort_by)) {
                $validator->errors()->add('order_by', 'Column not found.');
            }
        });
    }
}
