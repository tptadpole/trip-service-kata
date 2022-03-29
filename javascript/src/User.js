"use strict";

module.exports = class User {
  constructor() {
    this.trips = [];
    this.friends = [];
  }

  getFriends() {
    return this.friends;
  }

  addFriend(user) {
    this.friends.push(user);
  }

  getTrips() {
    return this.trips;
  }

  addTrip(trip) {
    this.trips.push(trip);
  }

  isFriendsWith(user) {
    return this.friends.some((friend) => friend === user);
  }
};
