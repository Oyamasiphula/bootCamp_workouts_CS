var dayDetails = function(string) {

    var weekDays =! string.startsWith('S');
    var weekEnds = string.startsWith('S');

    if (weekDays === true) {
        console.log(weekDays);
        return weekDays;
    } else if (weekEnds === true) {
        console.log(weekEnds);
        return weekEnds;
    }
};
