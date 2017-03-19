var whichPlatform = function(route) {
    switch (route) {
        case "Langa":
            return "platform 1";
        case "Stellenbosch":
            return "platform 6";
        case "Wynberg":
            return "Platform 2";
        default:
            return "There is no train to " + route;
    }
}
