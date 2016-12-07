var Airport = function() {
  this.hangar = [];
  this.isStormy = Math.random() > 0.5 ? true : false;
}

  Airport.prototype.land = function(plane) {
    plane.land();
    this.hangar.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    if (!this.hangar.includes(plane)) {
      throw new Error("Plane is not on this airport")
    };
    if (this.isStormy){
      throw new Error("Can't take off as it is stormy")
    }
    plane.takeOff();
  };
