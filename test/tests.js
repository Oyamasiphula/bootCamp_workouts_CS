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
    it("Should test for isDayName function which returns true if day param 'string' value is one of the week Days", function() {
        assert.equal(isDayName('Saturday'), false);
        assert.equal(isDayName('Monday'), true);
    });
    it("Should test for isDayName function which returns false if day param 'string' value is one of the weekends", function() {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
    });
    it("Should test for yearsAgo function which returns the range", function() {
        assert.equal(yearsAgo(1976), 41);
        assert.equal(yearsAgo2ndVer("12-12-1976"), 41);
    });
    it("Should test for sameWeekday function which returns true if the days of two dates are the same", function() {
        assert.equal(sameWeekday("2016-11-19", "2016-11-19"), true);
    });
    it("Should test for launchWhere function which returns the place based on a bank balance value", function() {
        assert.equal(lunchWhere(4500), "Two minute noodles today!");
        assert.equal(lunchWhere(3500), "Go to PnP!");
        assert.equal(lunchWhere(1000), "Two minute noodles today!");
    });
    it("Should test for switch cases/statements function which returns a platform number or train if the case isn't found", function() {
        assert.equal(whichPlatform('Langa'), "platform 1");
        assert.equal(whichPlatform('Stellenbosch'), "platform 6");
        assert.equal(whichPlatform('Wynberg'), "Platform 2");
        assert.equal(whichPlatform('Parow'), "There is no train to Parow");
    });
    it("Should test for weekOrWeekend function which returns week if day param value is one of weekdays", function() {
        assert.equal(weekOrWeekend("Wednesday"), "week");
        assert.equal(weekOrWeekend("Saturday"), "weekend");
        assert.equal(weekOrWeekend("Sunday"), "weekend");

    });
    it("Should test for transportFee function which returns the price of a transport based param value", function() {
        assert.equal(transportFee("morning"), "R20");
        assert.equal(transportFee("afternoon"), "R10");
        assert.equal(transportFee("night"), "free");

    });
    it("Should test for fromWhere function which returns the place of transport based registration param value", function() {
        assert.equal(fromWhere("CA 8786"), "Cape Town");
        assert.equal(fromWhere("CJ 42543"), "Paarl");
        assert.equal(fromWhere("CY"), "Bellville");
        assert.equal(fromWhere(""), "Some other place!");

    });
});
