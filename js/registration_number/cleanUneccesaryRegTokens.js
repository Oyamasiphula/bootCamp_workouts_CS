var cleanUneccesaryRegTokens = function(inputVal) {
    if (inputVal === undefined) {
        return
    } else {
        let cleanInvalidSymbols = inputVal.replace(/[&\/\\#,+()=$~%_`.@!^|;'":*?<>{}]/g, "");
        return cleanInvalidSymbols;
    }
};
