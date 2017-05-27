var regNumberInput = document.querySelector(".regitration"),
    showAllButton = document.querySelector(".showAll"),
    searchButton = document.querySelector(".searchButton"),
    addRegNumber = document.querySelector("#submit"),
    regTemp = document.querySelector("#regListTemp"),
    regTempInst = Handlebars.compile(regTemp.innerHTML),
    regListOutput = document.querySelector(".regListOutput"),
    radios = document.querySelectorAll(".location");

var initEmptyRegList = [];

var add = function(e) {
    e.preventDefault();

    var regNumberInputVal = validateInputAndParseCorrectValue(regNumberInput.value);
    let organisedRegPlate = cleanUneccesaryRegTokens(regNumberInputVal),
        plateLocationChars = organisedRegPlate.substring(0, 3),
        capitaliseLocChars = plateLocationChars.toUpperCase(),
        wellOrganisedRegInputVal = organisedRegPlate.replace(plateLocationChars, capitaliseLocChars);

    var finalList = getListOfValidReg(initEmptyRegList, wellOrganisedRegInputVal);
    if (finalList[0].reg == "") {
        return ;
    }
    regListOutput.innerHTML = regTempInst({
        regList: initEmptyRegList
    });
    regNumberInput.value = "";
};

var noResult = function(list) {
    if (list.length === 0) {
        return regListOutput.innerHTML = "<div class='row' id='opt'><h4><i class='fa fa-exclamation-triangle fa-2x' aria-hidden='true'></i> No registration numbers added or found <i class='fa fa-exclamation-triangle fa-2x' aria-hidden='true'></i></h4></div>";
     };
}

addRegNumber.addEventListener("click", add);
showAllButton.addEventListener('click', function() {
    if (noResult(initEmptyRegList)) {
        return ;
    }
    regListOutput.innerHTML = regTempInst({
        regList: initEmptyRegList
    })
});

searchButton.addEventListener('click', function() {
    if (noResult(filter([]))) {
        return ;
    }
    regListOutput.innerHTML = regTempInst({
        regList: filter([])
    });
});
