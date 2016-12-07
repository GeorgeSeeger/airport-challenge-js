var Airport = function() {
  this.hangar = [];

}

  Airport.prototype.land = function(plane) {
    plane.land();
    this.hangar.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    if (!this.hangar.includes(plane)) {
      throw new Error("Plane is not on this airport")
    };
    plane.takeOff();
  };
