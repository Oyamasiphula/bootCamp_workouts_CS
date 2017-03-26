var displayEachRegNumber = function(listOfRegistrationNumbers) {
    var holdRegPlates = [];
    for (var i = 0; i < listOfRegistrationNumbers.length; i++) {
        console.log(listOfRegistrationNumbers[i]);
        holdRegPlates.push(listOfRegistrationNumbers[i]);
    }
    return holdRegPlates;
};
