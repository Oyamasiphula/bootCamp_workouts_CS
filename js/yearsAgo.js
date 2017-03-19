var yearsAgo = function(year) {
    var range = 2017 - year;
    return range;
}

var yearsAgo2ndVer = function(year) {
    var range = new Date().getFullYear("12-12-2017") - new Date(year).getFullYear();
    return range;
}
