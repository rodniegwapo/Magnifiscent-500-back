<?php

namespace App\Http\Requests\Account\Admin;

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
            'referrer_id' => 'nullable|integer|exists:accounts,id',
            'admin' => 'nullable|boolean',
            'order_by' => 'nullable|string',
            'order_desc' => 'required_with:order_by|boolean'
        ];
    }
}
