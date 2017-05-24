var regNumberInput = document.querySelector(".regitration"),
    addRegNumber = document.querySelector("#submit"),
    regTemp = document.querySelector("#regListTemp"),
    regTempInst = Handlebars.compile(regTemp.innerHTML),
    regListOutput = document.querySelector(".regListOutput"),
    radios = document.querySelector(".row input.location"),
    showAllFromLocOptions = document.getElementsByName('location');



var regList = [];
var captured = [];

var filter = function(listOfRegParam){
  console.log(regList);
  // for (var i = 0; i < listOfRegParam.length; i++) {
  //
  //   var checked = showAllFromLocOptions[i].checked;
  //
  //   console.log(listOfRegParam[i].value);
  //
  //   // if (checked === listOfRegParam[i].value) {
  //   //
  //   // }
  // }
}



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
};

radios.addEventListener('change', filter(showAllFromLocOptions));
addRegNumber.addEventListener("click", add);
