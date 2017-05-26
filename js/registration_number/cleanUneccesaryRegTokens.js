var cleanUneccesaryRegTokens = function(inputVal) {
  if (inputVal === undefined) {
    return
  }
  else{
    var cleanInvalidSymbols = inputVal.replace(/[&\/\\#,+()=$~%_`.@!^|;'":*?<>{}]/g, "");
    return cleanInvalidSymbols;
  }
};
