var counter = function(people) {

    var peopleGreeted = {};

    if (people) {
        peopleGreeted = people;
    }

     let greetOnePerson = function(name) {
        if (peopleGreeted[name] === undefined) {
            peopleGreeted[name] = 0;
        }
        peopleGreeted[name] += 1;
    }

     let greetedCount = function() {
        var list = [];
        for (people in peopleGreeted) {
            list.push(people);
        }
        return list.length;
    }

     let timesGreeted = function(name) {
        return peopleGreeted[name];
    }
     let all = function() {
        return peopleGreeted;
    }

    return {
        greetOnePerson,
        greetedCount,
        timesGreeted,
        all
    }
};

var factoryFunction = counter({});
