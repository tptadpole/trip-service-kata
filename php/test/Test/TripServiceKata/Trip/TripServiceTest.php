<?php

namespace Test\TripServiceKata\Trip;

use PHPUnit\Framework\TestCase;
use TripServiceKata\Exception\UserNotLoggedInException;
use TripServiceKata\Trip\TripService;
use TripServiceKata\User\User;
use TripServiceKata\User\UserSession;
use TripServiceKata\User\UserSessionHelper;

class TripServiceTest extends TestCase
{
    /**
     * @var TripService
     */
    private $target;

    protected function setUp()
    {
        $this->target = new TripService();
    }

    public function testShouldThrowExceptionWhenUserIsNotLoggedIn()
    {
        $this->expectException(UserNotLoggedInException::class);

        $mockUserSession = $this->createMock(UserSessionHelper::class);
        $mockUserSession->method('getLoggedUser')
            ->willReturn(null);

        $aUser = new User('a');
        $this->target->getTripsByUser($aUser, $mockUserSession);
    }

    public function testShouldNotReturnTripsWhenLoggedUserAreNotFriend()
    {
    }

    public function testShouldReturnTripsWhenLoggedUserAreFriend()
    {
    }
}
