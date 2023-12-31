<?php

namespace App\Http\Resources;

use App\Helpers\ArrHelper;
use App\Helpers\CalHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthUser extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $gender = ArrHelper::searchByKey(ArrHelper::getTransList('genders'), 'uuid', $this->gender);

        return [
            'uuid'        => $this->uuid,
            'username'    => $this->username,
            'email'       => $this->email,
            'mobile'      => $this->mobile,
            'roles'       => $this->roles()->pluck('name')->all(),
            'permissions' => $this->getAllPermissions()->pluck('name')->all(),
            'profile'     => array(
                'name'       => $this->name,
                'avatar'     => $this->avatar,
                'cover'      => $this->getMeta('cover_image'),
                'gender'     => $gender,
                'birth_date' => CalHelper::toDate($this->birth_date),
                'age'        => CalHelper::getAge($this->birth_date)
            ),
            'membership_expiry_date'  => CalHelper::toDate($this->membership_expiry_date),
            'has_active_membership'   => $this->hasActiveMembership(),
            'has_lifetime_membership' => $this->getMeta('lifetime') ? true : false,
            'preference'              => $this->user_preference
        ];
    }
}
