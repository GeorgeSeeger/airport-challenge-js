var Airport = function() {
  this.hangar = [];

}

  Airport.prototype.land = function(plane) {
    plane.land();
    this.hangar.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    plane.takeOff();
  };
