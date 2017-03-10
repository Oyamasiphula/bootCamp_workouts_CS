var greet = function(language,name) {

    var Sotho_greet = "Dumela, " + name;
    var Xhosa_greet = "Molo, " + name;
    var English_greet = "Hello, " + name;

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
    return name;
};
