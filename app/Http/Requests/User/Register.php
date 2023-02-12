<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;

class Register extends FormRequest
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
            'referrer_id' => 'required|integer|exists:accounts,id',
            'package_code' => 'required|string',
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'mobile_no' => 'required|string|max:25',
            'address' => 'required|string|max:1500',
            'email' => 'required|string|email|max:255|unique:users',
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6|max:100',
            'confirm_password' => 'required|string|same:password'
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
            if ($this->package_code) {
                $packageCode = app('PackageCode')
                    ->where(DB::raw('BINARY `code`'), $this->package_code)
                    ->whereNull('account_id')
                    ->first();
                if (! $packageCode) {
                    $validator->errors()->add('package_code', 'The package code is invalid.');
                }
            }
        });
    }
}
