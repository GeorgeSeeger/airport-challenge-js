describe("Airport", function() {

  var airport;

  beforeEach(function () {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane',
      ['land', 'takeOff']
    )
  });

  describe("landing", function() {

    beforeEach(function(){
      airport.land(plane);
    });

    it("should accept new airplanes", function(){
      expect(plane.land).toHaveBeenCalled();
    });

    it("should store airplanes", function(){
      expect(airport.planes).toEqual([plane]);
    });
  });

  describe("taking off", function(){

    beforeEach(function(){
      airport.land(plane);
      airport.taxi(plane);
    });

    it("should taxi an airplane", function(){
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it("should no longer be  in the airport", function(){
      expect(airport.planes).toEqual( [] );
    });
  });

  describe("isStormy", function(){

    beforeEach(function(){
      airport.land(plane);
    });

    it("should be initialized with weather", function(){
      expect(airport.isStormy).toEqual(false);
    });

    it("should prevent take off when weather is stormy", function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){airport.taxi(plane); }).toThrowError("Can't take off it's stormy");
    });

    it("should prevent landing when weather is stormy", function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){airport.land(plane)}).toThrowError("Can't land it's stormy");
    })
  });

  it("should have a max capacity of 20", function(){
    for(var i = 1; i <= 20; i++){
      airport.land(plane);
    }
    expect(function(){airport.land(plane)}).toThrowError("Can't land airport is full");
  })
});
