"use strict";

const assert = require("assert");
const TripService = require("../src/TripService");
const User = require("../src/User");
const MockTripDAO = require("./MockTripDAO");
const NotLoggedException = require("../src/NotLoggedException");

const loggedUser = new User();
const strangeUser = new User();

describe("TripService", () => {
  it("should_throw_error_when_user_us_not_logged_in", () => {
    const tripService = new TripService(MockTripDAO);

    assert.throws(() => tripService.getTripsByUser(null, null), NotLoggedException);
  });

  it("should_not_return_trip_when_users_are_not_friend", () => {
    const tripService = new TripService(MockTripDAO);
    strangeUser.addTrip("article");
    const result = tripService.getTripsByUser(strangeUser, loggedUser).length;

    assert.equal(0, result);
  });

  xit("should_return_tip_when_users_are_friend", () => {
    //
  });
});
