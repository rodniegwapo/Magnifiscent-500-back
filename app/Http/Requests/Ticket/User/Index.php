<?php

namespace App\Http\Requests\Ticket\User;

use App\Helpers\DatabaseHelper;
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
            'search' => 'nullable|string',
            'status' => 'nullable|string|in:pending,active,closed',
            'order_by' => 'nullable|string',
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
            if ($this->sort_by && ! DatabaseHelper::columnExisted('tickets', $this->sort_by)) {
                $validator->errors()->add('order_by', 'Column not found.');
            }
        });
    }
}
