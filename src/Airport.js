var Airport = function() {
  this.hangar = [];
  this.isStormy = Math.random() > 0.5 ? true : false;
  this.maxCapacity = 5
}
  Airport.prototype._isFull = function() {
    return this.hangar.length > this.maxCapacity;
  };

  Airport.prototype.land = function(plane) {
    if (this._isFull()) {
      throw new Error("Airport is full")
    };
    if (this.isStormy){
      throw new Error("Can't land as it is stormy");
    }
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
    this.hangar.splice( this.hangar.indexOf(plane),1);
  };
