<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class Update extends FormRequest
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
        $id = $this->id ?? auth()->id();

        return [
            'avatar' => 'sometimes|image',
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => [
                'sometimes', 'string', 'max:255', 'email',
                Rule::unique('users')->ignore($id)
            ],
            'username' => [
                'sometimes', 'string', 'max:255',
                Rule::unique('users')->ignore($id)
            ],
            'mobile_no' => 'nullable|string|max:25',
            'address' => 'nullable|string',
            'bdo_account' => 'nullable|string|max:50',
            'eastwest_account' => 'nullable|string|max:50',
            'security_bank_account' => 'nullable|string|max:50'
        ];
    }
}
