var yearsAgo = function(year) {
    var range = 2018 - year;
    return range;
}

var yearsAgo2ndVer = function(year) {
    var range = new Date().getFullYear("12-12-2018") - new Date(year).getFullYear();
    return range;
}
