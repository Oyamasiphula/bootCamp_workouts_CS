var personGreeted = {};

var myStorage = localStorage,
    counterTrack = myStorage.getItem('count');


var getNameProperties = function(nameGreeted) {

    var properNameFormat = nameGreeted.charAt(0).toUpperCase() + nameGreeted.substring(1);
console.log(personGreeted[name]);
    if (personGreeted[name] === undefined) {
        personGreeted["name"] = properNameFormat;
        personGreeted["count"] = counter();
    }
    // myStorage.setItem("count", count);
    console.log(personGreeted);
    return personGreeted;
};
