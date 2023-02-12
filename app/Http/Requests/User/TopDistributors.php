<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class TopDistributors extends FormRequest
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
            'year' => 'required|integer',
            'month' => 'required|integer|min:1|max:12',
            'top' => 'required|min:1|max:100'
        ];
    }
}
