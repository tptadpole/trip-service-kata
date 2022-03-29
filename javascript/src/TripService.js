"use strict";

class TripService {
  constructor(tripDAO) {
    this.tripDAO = tripDAO;
  }

  getTripsByUser(user, loggedUser) {
    if (!loggedUser) throw new Error("User not logged in.");
    return user.isFriendsWith(loggedUser) ? [] : tripDAO.findTripsByUser(user);
  }
}

module.exports = TripService;
