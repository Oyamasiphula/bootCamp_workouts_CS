var myStorage = localStorage,
    counterTrack = myStorage.getItem('count');

var getNameProperties = function(nameGreeted) {
    var personGreeted = {};

    var properNameFormat = nameGreeted.charAt(0).toUpperCase() + nameGreeted.substring(1);

    if (personGreeted[name] === undefined) {
        personGreeted[properNameFormat] = 0;
    }
    personGreeted[properNameFormat] += 1;
    // myStorage.setItem("count", count);
    return {
        name : properNameFormat,
        count:personGreeted[properNameFormat]
    };
};
