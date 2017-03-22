var morningReminder = function(time, status) {
    if (time === "5:00 AM" && status === "up") {
        return "wake up and sort your teeth out before making coffee";
    } else if (time === "5:15 AM" && status === "up") {
        return "Your coffee must be ready to drink";
    } else if (time === "5:30 AM" && "drinking Coffee") {
        return "Wash up yourself ndoda";
    } else if (time > "5:50 AM" && time >= "5:50 AM" && status === "taking bath") {
        return "hurry up and you should be wearing your clothes";
    } else if (time === "6:15 AM" && status === "wearing") {
        return "Go out and seek a public transport";
    } else if (time > "9:00 AM" && time <= "9:30 AM" && status === "travelling") {
        return "Stay in touch and its time for work";
    } else if (time > "9:30 AM" && time <= "9:45 AM" && status === "up") {
        return "You should have your standup meeting";
    } else if (time >= "12:00 PM" || status === "busy") {
        return "Its afternoon ndoda !!! Try to reschedule your daily program for the day";
    } else {
        return "something you are doing it wrong check the time !!!"
    }
}
