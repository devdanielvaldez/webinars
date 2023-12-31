<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MeetingRequest extends FormRequest
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
        $uuid = $this->route('meeting');

        $rules = [
            'identifier' => 'nullable|alpha_dash',
            'type'       => 'required|array'
        ];

        if (request('instant')) {
            return $rules;
        }

        if (request('should_remind')) {
            $rules['remind_before'] = 'required|integer|min:1';
        }

        $rules['title']           = 'required|min:5';
        $rules['agenda']          = 'required|min:20';
        $rules['start_date_time'] = 'required|date';
        $rules['period']          = 'integer|min:1';
        $rules['category']        = 'required|array|min:1';

        return $rules;
    }
}
