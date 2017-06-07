var getNameVal = function(name) {

    if (name.trim().length === 0 || name.trim().length < 4) {
        nameFieldInput.value = '';
        window.alert("Please enter correct name");
        return;
    }
    for (var i = 0, collLen = radios.length; i < collLen; i++) {

        var selectedLanguage = radios[i].value
        var checked = radios[i].checked;

        if (!checked) {
            //skip the code below go to the next loop item
            continue;
        }
        printOutPut("specificNameDisplay", greet(selectedLanguage, getNameProperties.greetOnePerson));
        printOutPut("totalNumOfGreetings", "You have been greeted " + getNameProperties.count + " Times");
        nameFieldInput.value = '';
    }
};

var strLink = './index.html';
var goBackToMain = function() {
    window.location.href = strLink;
};

okButton.addEventListener('click', function(e) {
    e.preventDefault;
    factoryFunction.greetOnePerson(getNameVal(nameFieldInput.value));
});
resetButton.addEventListener('click', resetCounter);
backButton.addEventListener('click', goBackToMain);
