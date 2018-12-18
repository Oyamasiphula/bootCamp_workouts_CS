var getNameValidation = function(name) {

    if (name.trim().length === 0 || name.trim().length < 4) {
        nameFieldInput.value = '';
        window.alert("Please enter correct name");
        return false;
    }
    for (var i = 0, collLen = radios.length; i < collLen; i++) {

        var selectedLanguage = radios[i].value
        var checked = radios[i].checked;

        if (!checked) {
            //skip the code below go to the next loop item
            continue;
        }

        printOutPut("specificNameDisplay", greet(selectedLanguage, name));
        let nameKeyVal = name;
        printOutPut("totalNumOfGreetings", "You have been greeted " + factoryFunction.greetedPeopleObj()[nameKeyVal] + " Times");
    }
};

var strLink = '/index.html';
var goBackToMain = function() {
    window.location.href = strLink;
};

okButton.addEventListener('click', function(e) {
    e.preventDefault;
    let actualPersonsName = getNameVal(nameFieldInput.value);
    factoryFunction.greetOnePerson(actualPersonsName);
    getNameValidation(getNameVal(nameFieldInput.value));

    console.log(actualPersonsName.toString());
    if (actualPersonsName.length > 3) {
        var retrievedData = JSON.stringify(factoryFunction.greetedPeopleObj());
        storeData(retrievedData);
        var obj = localStorage.peopleGreeted
        console.log(obj[actualPersonsName]);
    }
    nameFieldInput.value = '';

});
resetButton.addEventListener('click', resetCounter);
backButton.addEventListener('click', goBackToMain);
