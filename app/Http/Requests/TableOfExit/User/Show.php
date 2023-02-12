<?php

namespace App\Http\Requests\TableOfExit\User;

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
            'account_id' => [
                'required',
                'integer',
                'exists:accounts,id',
                function ($attribute, $value, $fail) {
                    $account = app('Account')->find($value);
                    if ($account->user_id !== auth()->id()) {
                        $fail('The ' . $attribute . ' is invalid.');
                    }
                }
            ],
            'table_level' => 'required|integer|min:1|max:5',
            'parent_depth' => 'nullable|integer'
        ];
    }
}
