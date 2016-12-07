describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj("Plane", ['land']);
  });

  describe("landing", function() {
    it("instructs a plane to land", function() {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });
});
