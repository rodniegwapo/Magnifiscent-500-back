<?php

namespace App\Http\Requests\Encashment;

use Illuminate\Foundation\Http\FormRequest;

class User extends FormRequest
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
            'page' => 'required|integer|min:1',
            'limit' => 'nullable|integer|min:5|max:100',
            'status' => 'nullable|string|in:paid,unpaid',
            'search' => 'nullable|string'
        ];
    }
}
