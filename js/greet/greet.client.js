var okButton = document.getElementById('okButton');
var nameFieldInput = document.getElementById('specifyName');
var backButtonElement = document.querySelector("#backButton");

var getNameVal = function() {
    var name = nameFieldInput.value;
    if (name.trim().length === 0) {
        return;
    }
    document.getElementById('speciedNameDisplay').innerHTML = greet(name);
    nameFieldInput.value = '';
};
var strLink = 'file:///home/oyama/projects/Codex_Repo/bootCamp_workouts_CS/index.html';

var goBackToMain = function() {
    window.location.href = strLink;
}

okButton.addEventListener('click', getNameVal)
backButton.addEventListener('click', goBackToMain)
