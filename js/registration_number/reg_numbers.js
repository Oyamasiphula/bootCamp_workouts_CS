var regNumberInput = document.querySelector(".regitration"),
    addRegNumber = document.querySelector("#submit"),
    regTemp = document.querySelector("#regListTemp"),
    regTempInst = Handlebars.compile(regTemp.innerHTML),
    regListOutput = document.querySelector(".regListOutput");

var regList = [];

addRegNumber.addEventListener("click", function(e){
  e.preventDefault();
  var registration = regNumberInput.value
  console.log(typeof registration);
  if (registration.trim().length  === 0 || typeof(registration) === Number) {
    alert("Please enter a valid regstration !")
      return
  }
  regList.push({reg : registration});

  regListOutput.innerHTML = regTempInst({
      regList:regList
  });
});
