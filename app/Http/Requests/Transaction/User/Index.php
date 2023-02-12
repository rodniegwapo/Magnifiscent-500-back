<?php

namespace App\Http\Requests\Transaction\User;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\DatabaseHelper;

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
            'meta_type' => 'nullable|string|in:Table Of Exit,Direct Referral,Encashment,Monthly Sharing Poll',
            'type' => 'nullable|string|in:withdraw,deposit',
            'confirmed' => 'nullable|boolean',
            'account_id' => 'nullable|integer',
            'order_by' => 'nullable|string',
            'status' => 'nullable|string|in:paid,unpaid',
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
            if ($this->account_id) {
                $account = app('Account')->find($this->account_id);
                if (! $account || ($account && $account->user_id !== auth()->id())) {
                    $validator->errors()->add('seller_id', 'The selected account id is invalid.');
                }
            }
            if ($this->sort_by && ! DatabaseHelper::columnExisted('transactions', $this->sort_by)) {
                $validator->errors()->add('order_by', 'Column not found.');
            }
        });
    }
}
