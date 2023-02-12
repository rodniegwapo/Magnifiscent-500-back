<?php

namespace App\Http\Requests\Encryption\Seller;

use Illuminate\Foundation\Http\FormRequest;

class PackageCode extends FormRequest
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
            'user_id' => 'nullable|integer|exists:users,id',
            'account_id' => 'nullable|integer|exists:accounts,id',
            'claimed' => 'nullable|boolean',
            'order_by' => 'nullable|string',
            'order_desc' => 'required_with:order_by|boolean'
        ];
    }
}
