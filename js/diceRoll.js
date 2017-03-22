var diceRoll = function() {
    var rollDice = function() {
        return Math.floor((Math.random() * 6) + 1);
    }

    var rolledNumber = 0;
    var numberOfRolls = 0;

    while (rolledNumber !== 6) {
        rolledNumber = rollDice();
        numberOfRolls++
        // The next line is Inspection assurity
        console.log('You rolled:', rolledNumber);
        if (rolledNumber === 6) {
            console.log("The end result number of rolls is : 6 you can start.","you rolled your dice : " + numberOfRolls + " Times");
            return 'You rolled: ' + rolledNumber;
        }
    }

};
