function Airport() {
  this.planes = [];
  this.CAPACITY = 20;
  this.isStormy = false;
}

Airport.prototype.land = function(plane){
  if (this.isStormy) {
    throw new Error("Can't land it's stormy");
  } else if (this.planes.length >= this.CAPACITY) {
    throw new Error("Can't land airport is full");
  } else {
    plane.land();
    return this.planes.push( plane );
  }
}

Airport.prototype.taxi = function(plane){
  if (this.isStormy) {
    throw new Error("Can't take off it's stormy");
  } else {
    plane.takeOff();
    return this.planes.pop(plane);
  }
}
