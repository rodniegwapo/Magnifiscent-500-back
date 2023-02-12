<?php

namespace App\Http\Requests\TableOfExit\Admin;

use Illuminate\Foundation\Http\FormRequest;

class Show extends FormRequest
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
            'account_id' => 'required|integer|exists:accounts,id',
            'table_level' => 'required|integer|min:1|max:5'
        ];
    }
}
