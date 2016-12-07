describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj("Plane", ['land', 'takeOff']);
  });

  describe("land", function() {
    it("instructs a plane to land", function() {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });

  describe("takeOff", function() {
    it("instructs a plane to take off", function() {
      airport.takeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });
  });
});
