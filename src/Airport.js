var Airport = function() {

  Airport.prototype.land = function(plane) {
    plane.land();
  };

  Airport.prototype.takeOff = function(plane) {
    plane.takeOff();
  };
};
