<?php

namespace App\Http\Requests\Ticket\User;

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
            'issue' => 'required|string|max:255',
            'description' => 'required|string|max:2000',
            'image' => 'sometimes|image'
        ];
    }
}
