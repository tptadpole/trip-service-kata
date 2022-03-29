"use strict";

function findTripsByUser(user) {
  return user.getTrips();
}

module.exports = { findTripsByUser };
