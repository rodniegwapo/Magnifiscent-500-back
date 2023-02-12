<?php

namespace App\Http\Requests\User;

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
            'avatar' => 'sometimes|image',
            'role_id' => 'required|integer|exists:roles,id',
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'username' => 'required|string|max:255|unique:users',
            'mobile_no' => 'required|string|max:25',
            'address' => 'nullable|string',
            'bdo_account' => 'nullable|string|max:50',
            'eastwest_account' => 'nullable|string|max:50',
            'security_bank_account' => 'nullable|string|max:50'
        ];
    }
}
