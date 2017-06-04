var greet = function(language, nameObj) {
    var Sotho_greet = "Dumela, " + getNameProperties.name;
    var Xhosa_greet = "Molo, " + getNameProperties.name;
    var English_greet = "Hello, " + getNameProperties.name;

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
