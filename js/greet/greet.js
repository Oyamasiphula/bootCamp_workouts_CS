var count = 0,
    myStorage = localStorage,
    count = myStorage.getItem('count');


var getName = function(name) {
    var properNameForm = name.charAt(0).toUpperCase() + name.substring(1);

    var personGreeted = {};

    if (personGreeted.name === undefined) {
        personGreeted["name"] = properNameForm;
        personGreeted["count"] = count++;
    } 

    console.log(myStorage.count, personGreeted);

    return personGreeted;
};


var greet = function(language, nameObj) {
console.log(nameObj["name"]);

    var properNameForm = nameObj["name"].charAt(0).toUpperCase() + nameObj["name"].substring(1)

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
