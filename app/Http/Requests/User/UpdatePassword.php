<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class UpdatePassword extends FormRequest
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
            'current_password' => 'required|string|min:6|max:100',
            'new_password' => 'required|string|min:6|max:100',
            'confirm_new_password' => 'required|string|same:new_password'
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
            if ($this->current_password && !$this->isPasswordValid()) {
                $validator->errors()->add('current_password', 'Current Password is invalid.');
            }
        });
    }

    /**
     * Validate current password
     *
     * @return boolean
     */
    private function isPasswordValid()
    {
        return Hash::check($this->current_password, auth()->user()->password);
    }
}
