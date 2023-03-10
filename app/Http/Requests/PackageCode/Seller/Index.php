<?php

namespace App\Http\Requests\PackageCode\Seller;

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
            'user_id' => 'nullable|integer|exists:users,id',
            'account_id' => 'nullable|integer|exists:accounts,id',
            'claimed' => 'nullable|boolean'
        ];
    }
}
