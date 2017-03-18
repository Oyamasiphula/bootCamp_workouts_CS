var countRegNumber = function(string) {
    var regList = [];
    var splitRegStr = string.split(",");
    for (var i = 0; i < splitRegStr.length; i++) {
        regList.push(splitRegStr[i]);
    };
    return regList.length;
}
