"use strict";

const NotLoggedException = require("./NotLoggedException");

class TripService {
  constructor(tripDAO) {
    this.tripDAO = tripDAO;
  }

  getTripsByUser(user, loggedUser) {
    if (!loggedUser) throw NotLoggedException;
    return user.isFriendsWith(loggedUser) ? this.tripDAO.findTripsByUser(user) : [];
  }
}

module.exports = TripService;
