<?php

namespace App\Http\Requests\Transaction\User;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class Encashment extends FormRequest
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
            'account_id' => 'required|integer',
            'amount' => 'required|integer|min:' . config('app.encashment.min'),
            'payment_channel_type' => 'nullable|string|in:Bank,Padala Center',
            'payment_channel' => 'required|string|in:BDO,Eastwest,Security Bank,Palawan Pawnshop,M Lhuillier,Cebuana Lhuillier'
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
            // abort(422, 'Encashment requests will be allowed next ' . strtoupper(config('app.encashment.request_day')) . '!');
            // Check if the day is not friday
            if (Carbon::now()->isoFormat('dddd') !== config('app.encashment.request_day')) {
                abort(422, 'Encashment requests are allowed every ' . strtoupper(config('app.encashment.request_day')) . '!');
            }
            // Check account balance
            if ($this->account_id) {
                $account = app('Account')->find($this->account_id);
                if (! $account || ($account && $account->user_id !== auth()->id())) {
                    $validator->errors()->add('account_id', 'The selected account id is invalid.');
                }
                if ($account && $account->balanceFloat < $this->amount) {
                    $validator->errors()->add('amount', 'Not enough balance.');
                }
            }
        });
    }
}
