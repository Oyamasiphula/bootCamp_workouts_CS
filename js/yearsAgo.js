var yearsAgo = function(year) {
    let range = new Date().getFullYear("12-12-2017") - new Date(year).getFullYear();
    return range;
}
