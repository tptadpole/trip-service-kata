<?php

declare(strict_types=1);

namespace TripServiceKata\User;

class UserSessionHelper
{
    /**
     * @return User|null
     */
    public function getLoggedUser()
    {
        return UserSession::getInstance()->getLoggedUser();
    }
}