var assert = chai.assert;

describe("Test for all the client JS code", function() {
    it("Should test for greet function", function() {

        assert.equal(greet("English", "Janine"), "Hello, Janine");
        assert.equal(greet("Xhosa", "Janine"), "Molo, Janine");
        assert.equal(greet("Sotho", "Janine"), "Dumela, Janine");
    });
    it("Should test for which day function", function() {
        assert.equal(dayDetails('Saturday'), true);
    });
    it("Should test for multiplyThem function", function() {
        assert.equal(multiplyThem(2, 3), 6);
        assert.equal(multiplyThem(15, 5), 75);
    });
    it("Should test for favouriteSport function", function() {
        assert.equal(favSport(), "David Blankit's favourate sport is Golf");
    });
    it("Should test for isFromBellville function", function() {
        assert.equal(isFromBellville("CY 123"), true);
    });

    it("Should test for isisFromCapeTown function", function() {
        assert.equal(isFromCapeTown("CA 123 908"), true);
        assert.equal(isFromCapeTown("CJ 123 908"), false);
    });
    it("Should test for isFromGauteng function", function() {
        assert.equal(isFromGauteng("DR 45 LR GP"), true);
        assert.equal(isFromGauteng("CJ 123 908"), false);
    });
    it("Should test for isFromLimpopo function", function() {
        assert.equal(isFromLimpopo("DRT 122 L"), true);
        assert.equal(isFromGauteng("CJ 123 908"), false);
    });
    it("Should test for isFrom function and should return a boolean based on the location", function() {
        assert.equal(isFrom("CJ 7342", "CJ"), true);
        assert.equal(isFrom("CJ 7342", "CY"), false);
    });
    it("Should test for regCheck function and should return a boolean based on the location", function() {
        var isGP = regCheck('DV 23 NB GP', 'GP');
        var isMP = regCheck('DV 23 LP GP', 'MP');
        assert.equal(isGP, true);
        assert.equal(isMP, false);
    });
    it("Should test for countRegNumber function and should return total number of Registration numbers", function() {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        var regCount2 = countRegNumber('CA 182736,CY 523519,CJ 812328,JHB 87868,CY 98439')
        assert.equal(regCount, 3);
        assert.equal(regCount2, 5);
    });
});
