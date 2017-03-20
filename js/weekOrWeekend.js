var weekOrWeekend = function(day) {

    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        weekend = ["Sunday", "Saturday"],
        valWeekend = [],
        valWeekdays = [];

    for (let actualDayIndexVal = 0; actualDayIndexVal < weekdays.length; actualDayIndexVal++) {
        valWeekdays.push(weekdays[actualDayIndexVal].substring(0, 1));
        if (day.startsWith(weekdays[actualDayIndexVal])) {
            return "week";
        }
    }
    for (let actualDayIndexVal = 0; actualDayIndexVal < weekend.length; actualDayIndexVal++) {
        valWeekend.push(weekend[actualDayIndexVal].substring(0, 1));
        if (day.startsWith(weekend[actualDayIndexVal])) {
            return "weekend";
        }
    }
};
