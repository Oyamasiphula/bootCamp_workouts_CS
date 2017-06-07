var Counter = function(people){

    var peopleGreeted = {};

    if (people){

        peopleGreeted = people;
    }

     function greetOnePerson(name){
        if (peopleGreeted[name] === undefined){
            peopleGreeted[name] = 0;
        }
        peopleGreeted[name] += 1;
        console.log(peopleGreeted[name]);
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



// function store(counter){
//     var value = JSON.stringify(counter.all());
//     localStorage.setItem('all', value);
// }
//
// function retrieve(){
//     var values = localStorage.getItem('all')
//     if (values){
//         return JSON.parse(values);
//     }
//     return {};
//     //localStorage.setItem('all', value);
// }

var factFunc = Counter({});
// console.log();
console.log(factFunc.greetOnePerson("Andre"));
console.log(factFunc.greetOnePerson("Andre"));
console.log(factFunc.greetOnePerson("Oyama"));
console.log(Object.keys(factFunc.all()));

  // greetOnePerson("Andre"));

// var greetOys = Counter.greetOnePerson("Andre");

// console.log(Counter.greetOnePerson("Andre"));
//   // greetOnePerson("Andre"));
// console.log(Counter.greetOnePerson("Andre"));
//   // greetOnePerson("Andre"));
// console.log(Counter.greetOnePerson("Andre"));
//   // greetOnePerson("Andre"));

// var counter = Counter(retrieve());
// counter.greetOnePerson("Andre");
// store(counter);
//
// counter.greetOnePerson("oyama");
// store(counter);
//
// counter.greetOnePerson("Andre");
// store(counter);


// var counter = Counter(retrieve());
//
// var btn = document.querySelector(".btn");
//
// btn.addEventListener('click', function(){
//     var name = textElem.value;
//     counter.greetOnePerson(name);
//     store(counter);
// });
//
//
//
// console.log(counter.greetedCount());
//
// var counterElem = document.querySelector('.counter');
//
// counterElem.innerHTML = counter.greetedCount();
//
// setTimeout(function () {
//     counterElem.innerHTML = counter.timesGreeted('Bob');
// }, 2000);
//
// console.log(counter.all());
// console.log(localStorage.getItem('all'));
