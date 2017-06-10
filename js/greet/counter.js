var counter = function(people) {

    var peopleGreeted = {};
    if (people) {
        peopleGreeted = people;
    };

    let greetOnePerson = function(name) {
        if (peopleGreeted[name] === undefined) {
            peopleGreeted[name] = 0;
        }
        peopleGreeted[name] += 1;
    };
    let greetedCount = function() {
        var list = [];
        for (people in peopleGreeted) {
            list.push(people);
        }
        return list.length;
    };
    let timesGreeted = function(name) {
        return peopleGreeted[name];
    };
    let greetedPeopleObj = function() {
        for (var name in peopleGreeted) {
            if (name.length < 3) {
                delete peopleGreeted[name];
            }
        };
        return peopleGreeted;
    };

    return {
        greetOnePerson,
        greetedCount,
        timesGreeted,
        greetedPeopleObj
    }
};

var factoryFunction = counter({});
