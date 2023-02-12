<?php

namespace App\Http\Requests\Transaction\Admin;

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
            'confirmed' => 'nullable|boolean',
            'status' => 'nullable|string|in:paid,unpaid',
            'meta_type' => 'nullable|string|in:Table Of Exit,Direct Referral,Encashment,Monthly Sharing Poll',
            'type' => 'nullable|string|in:withdraw,deposit'
        ];
    }
}
