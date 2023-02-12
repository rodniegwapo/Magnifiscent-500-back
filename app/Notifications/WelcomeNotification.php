<?php

namespace App\Notifications;

use App\Models\Account;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class WelcomeNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $account;

    /**
     * Create a new notification instance.
     *
     * @param App\Models\Account $account
     * @return void
     */
    public function __construct(Account $account)
    {
        $this->account = $account;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $first = 'Your account "'. $this->account->user->username . ' ';
        $first .= $this->account->name . '" has been successfully registered.';

        return (new MailMessage)
            ->subject('Congratulations! ' . $this->account->user->first_name)
            ->greeting('Congratulations! ' . $this->account->user->first_name)
            ->line($first)
            ->line('We hope that you will have a MAGNIFISCENT Journey with us. Cheers!')
            ->action('Login Now', url('/login'));
    }
}
