var okButton = document.getElementById('okButton');
var nameField = document.getElementById('specifyName2ndVer');

var getName2ndVer = function() {
    var name = nameField.value;
    if (name.trim().length === 0) {
        return;
    }
    document.getElementById('specifyName2ndVerPlaceHolder').innerHTML = greet(name);
    nameField.value = '';
};
okButton.addEventListener('click', getName2ndVer)
