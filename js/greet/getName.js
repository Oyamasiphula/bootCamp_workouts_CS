// var myStorage = localStorage,
//     counterTrack = myStorage.getItem('count');


var counter = function(people){

    var peopleGreeted = {};

    if (people){

        peopleGreeted = people;
    }

     function greetOnePerson(name){


        if (peopleGreeted[name] === undefined){
            peopleGreeted[name] = 0;
        }
        peopleGreeted[name] += 1;
        console.log(peopleGreeted);
    }
    console.log(peopleGreeted);
     function greetedCount(){
        //return Object.keys(peopleGreeted).length;

        var list = [];
        for (people in peopleGreeted){
            list.push(people);
        }
        return list.length;
        //return counter;
    }

     function timesGreeted(name){
        return peopleGreeted[name];
    }

     function all(){
        return peopleGreeted;
    }

    return {
        greetOnePerson,
        greetedCount,
        timesGreeted,
        all
    }
};

var getNameVal = function(nameField) {
  var name = nameField;
  var properNameFormat = name.charAt(0).toUpperCase() + name.substring(1);
  return properNameFormat;
};

var factoryFunction = counter({});

console.log(factoryFunction.greetOnePerson(getNameVal()));
console.log(factoryFunction.greetOnePerson(getNameVal()));
