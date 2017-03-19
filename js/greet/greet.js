var greet = function(language, name) {
    var properNameForm = name.charAt(0).toUpperCase() + name.substring(1)

    var Sotho_greet = "Dumela, " + properNameForm;
    var Xhosa_greet = "Molo, " + properNameForm;
    var English_greet = "Hello, " + properNameForm;

    if ("Sotho" === language) {
        return Sotho_greet;
    };
    if ("Xhosa" === language) {
        return Xhosa_greet;
    };
    if ("English" === language) {
        return English_greet;
    };
};
var getName = function(name) {
    var properNameForm = name.charAt(0).toUpperCase() + name.substring(1);
    return properNameForm;
};
