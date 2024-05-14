describe('ALF Spaceship finder', function() {
	beforeEach(function() {
		spaceshipFinder = new finder();
	});

	//Test 1
	it('should return 0 for an empty string', function() {
		expect(spaceshipFinder.find('')).toEqual("Spaceship lost forever");
	});

	
});
