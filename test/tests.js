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
    it("Should test for morningReminder function which returns action to take", function() {
        var currentTimeState = new Date();
        var hours = currentTimeState.getHours();
        var minutes = currentTimeState.getMinutes();
        var ampm = (hours >= 12) ? "PM" : "AM";
        var getPropTimeForm = hours + ":" + minutes + " " + ampm;

        assert.equal("Its afternoon ndoda !!! Try to reschedule your daily program for the day", morningReminder("6:15 AM", "up"));
        assert.equal("Its afternoon ndoda !!! Try to reschedule your daily program for the day", morningReminder(getPropTimeForm, "busy"));
    });
    it("Should test for diceRoll function which returns only when the conditional statement requirement's condition eval has been met(is true)", function() {
        assert.equal("You rolled: 6", diceRoll());
    });
    it("Should test for shoppingList function which displays a proper of a list", function() {
        var listResults = shoppingList('1x bread, 6x hotdog rolls, 2x tubs of margarine ');

        assert.equal(listResults[0], 'Shopping list:');
        assert.equal(listResults[1], '* 1x bread');
        assert.equal(listResults[2], '* 6x hotdog rolls');
        assert.equal(listResults[3], '* 2x tubs of margarine ');
    });
    it("Should test for displayEachRegNumber function which displays a proper of a list of registration number plates", function() {
        var registrationPlatelistResults = displayEachRegNumber(['CY 123 456', 'CL 876 895', 'CK 456 765', 'CA 345 673']);

        assert.equal(registrationPlatelistResults[0], 'CY 123 456');
        assert.equal(registrationPlatelistResults[1], 'CL 876 895');
        assert.equal(registrationPlatelistResults[2], 'CK 456 765');
        assert.equal(registrationPlatelistResults[3], 'CA 345 673');
    });
    it("Should test for allPaarl function that returns all registration number plates from Paarl", function() {
        assert.deepEqual(['CJ 678 543', 'CJ 67890'], allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));
    });
    it("Should test for allFromTown function that returns all registration number plates from a specific town", function() {
      var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
      assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
      var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
      assert.deepEqual(fromKuilsriver, [])
    });
});
