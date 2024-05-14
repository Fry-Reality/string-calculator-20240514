describe('ALF Spaceship finder', function() {
	beforeEach(function() {
		spaceshipFinder = new finder();
	});

	//Test 1
	it('should return the lost forever message if there is no field', function() {
		expect(spaceshipFinder.find('')).toEqual("Spaceship lost forever");
	});

	//Test 2
	it('should return the correct result in a valid example', function () {
		expect(spaceshipFinder.find('..........\n..........\n..........\n.......X..\n..........\n..........')).toEqual("[7, 2]");
	});
	
	//Test 3
	it('should return the lost forever message if there is no spaceship in the field', function () {
		expect(spaceshipFinder.find('..........\n..........\n..........\n..........\n..........\n..........')).toEqual("Spaceship lost forever");
	});

});
