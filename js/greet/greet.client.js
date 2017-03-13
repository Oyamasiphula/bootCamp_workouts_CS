var okButton = document.getElementById('okButton');
var nameFieldInput = document.getElementById('specifyName');
var radios = document.getElementsByName('languages');
var backButtonElement = document.querySelector("#backButton");

var count = 0;
var myStorage = localStorage;
var count = localStorage.getItem('count');
var getNameVal = function() {

    var name = nameFieldInput.value;
    if (name.trim().length === 0) {
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
        count++;
        myStorage.setItem("count", count);
        document.querySelector("#totalNumOfGreetings").innerHTML = count;
        nameFieldInput.value = '';
    }
};

var strLink = 'file:///home/oyama/projects/Codex_Repo/bootCamp_workouts_CS/index.html';
var goBackToMain = function() {
    window.location.href = strLink;
}

okButton.addEventListener('click', getNameVal);
backButton.addEventListener('click', goBackToMain);
