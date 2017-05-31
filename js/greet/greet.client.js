var okButton = document.getElementById('okButton'),
    nameFieldInput = document.getElementById('specifyName'),
    radios = document.getElementsByName('languages'),
    backButtonElement = document.querySelector("#backButton"),
    resetButton = document.querySelector(".button-primary");

var getNameVal = function() {

    var name = nameFieldInput.value;

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
        document.getElementById('speciedNameDisplay').innerHTML = greet(selectedLanguage, getName(name));
        myStorage.setItem("count", count);
        document.querySelector("#totalNumOfGreetings").innerHTML = "You have been greeted " + count + " Times";
        nameFieldInput.value = '';
    }
};

var strLink = './index.html';
var goBackToMain = function() {
    window.location.href = strLink;
}
var resetCounter = function() {
    window.myStorage.removeItem("count");
    count = 0;
    window.myStorage.setItem("count", count)
    document.querySelector("#totalNumOfGreetings").innerHTML = count;
}
okButton.addEventListener('click', getNameVal);
resetButton.addEventListener('click', resetCounter);
backButton.addEventListener('click', goBackToMain);
