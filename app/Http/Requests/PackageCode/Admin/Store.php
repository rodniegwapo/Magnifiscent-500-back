<?php

namespace App\Http\Requests\PackageCode\Admin;

use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
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
            'seller_id' => 'required|integer',
            'no_of_codes' => 'required|integer|min:1|max:10000'
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
        });
    }
}
