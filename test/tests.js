var assert = chai.assert;

describe("Test for all the client JS code", function() {
    it("Should test for greet function", function() {

        assert.equal(greet("English","Janine"), "Hello, Janine");
        assert.equal(greet("Xhosa","Janine"), "Molo, Janine");
        assert.equal(greet("Sotho","Janine"), "Dumela, Janine");
    });
    it("Should test for which day function", function() {
        assert.equal(dayDetails('Saturday') , true);
    });
    it("Should test for multiplyThem function", function() {
        assert.equal( multiplyThem(2, 3) , 6);
        assert.equal(multiplyThem(15,5), 75);
    });
    it("Should test for favouriteSport function", function() {
        assert.equal(favSport(), "David Blankit's favourate sport is Golf");
    });
    it("Should test for isFromBellville function", function() {
        assert.equal(favSport(), "David Blankit's favourate sport is Golf");
    });
    it("Should test for isFromBellville function", function() {
        assert.equal(favSport(), "David Blankit's favourate sport is Golf");
    });
});
