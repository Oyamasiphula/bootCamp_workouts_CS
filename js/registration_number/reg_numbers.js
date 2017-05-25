var regNumberInput = document.querySelector(".regitration"),
    showAllButton = document.querySelector(".showAll"),
    searchButton = document.querySelector(".searchButton"),
    addRegNumber = document.querySelector("#submit"),
    regTemp = document.querySelector("#regListTemp"),
    regTempInst = Handlebars.compile(regTemp.innerHTML),
    regListOutput = document.querySelector(".regListOutput"),
    radios = document.querySelectorAll(".location");


var regList = [];

var add = function(e) {
    e.preventDefault();
    var registration = regNumberInput.value
    if (registration.trim().length === 0 || typeof(registration) === Number) {
        alert("Please enter a valid regstration !")
        return
    }
    regList.push({
        reg: registration
    });
    regListOutput.innerHTML = regTempInst({
        regList: regList
    });
    regNumberInput.value = ""
};

var getRadioValue = function(radioListOptions) {
  let radioOptValue = "";
  radioListOptions.forEach(function(actualOption) {
    if (actualOption.type === 'radio' && actualOption.checked) {
      // get value, set checked flag (update the value to gain access )or do whatever I need to
      val = actualOption.value;
      radioOptValue = val
    }
  });
  return radioOptValue;
};
var filter = function(capturedRegPlates) {
    for (var i = 0; i < regList.length; i++) {
        let eachPlate = regList[i].reg;
        if (eachPlate.startsWith(getRadioValue(radios))) {
            capturedRegPlates.push({
                "reg": eachPlate
            });
        }
    };
    return capturedRegPlates;
};

var noResult = function(list) {if (list.length === 0) {regListOutput.innerHTML = "<div class='row' id='opt'><h4><i class='fa fa-exclamation-triangle fa-2x' aria-hidden='true'></i> No registration numbers added or found <i class='fa fa-exclamation-triangle fa-2x' aria-hidden='true'></i></h4></div>";return true;};}

addRegNumber.addEventListener("click", add);
showAllButton.addEventListener('click', function() {
    if (noResult(regList)) {
        return false;
    }
    regListOutput.innerHTML = regTempInst({
        regList
    })
});

searchButton.addEventListener('click', function() {
    if (noResult(filter([]))) {
        return false;
    }
    regListOutput.innerHTML = regTempInst({
        regList: filter([])
    });
});
