<?php

namespace App\Http\Requests\Account\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;

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
            'referrer_id' => 'nullable|integer|exists:accounts,id',
            'package_code' => 'required|string'
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
            if ($this->referrer_id) {
                $account = app('Account')->find($this->referrer_id);
                if ($account->user_id !== auth()->id()) {
                    $validator->errors()->add('referrer_id', 'The referrer id is invalid.');
                }
            }
        });
    }
}
