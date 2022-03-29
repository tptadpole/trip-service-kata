"use strict";

const assert = require("assert");
const TripService = require("../src/TripService");
const MockTripDAO = require("./MockTripDAO");
const NotLoggedException = require("../src/NotLoggedException");

describe("TripService", () => {
  it("should_throw_error_when_user_us_not_logged_in", () => {
    const tripService = new TripService(MockTripDAO);

    assert.throws(() => tripService.getTripsByUser(null, null), NotLoggedException);
  });

  xit("should_not_return_tip_when_users_are_not_friend", () => {
    //
  });

  xit("should_return_tip_when_users_are_friend", () => {
    //
  });
});
