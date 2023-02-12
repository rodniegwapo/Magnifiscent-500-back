<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class ResetPassword extends FormRequest
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
            'username' => [
                'required',
                'string',
                'max:255',
                function ($attribute, $value, $fail) {
                    $user = app('User')->where('username', $value)
                        ->orWhere('email', $value)
                        ->first();
                    if (! $user) {
                        $fail('The username or email doesn\'t exist.');
                    }
                }
            ]
        ];
    }
}
