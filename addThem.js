FUNCTION BUILDING BLOCKS

You now know about the different function types in JavaScript.

Functions have:

A name (optional)
A body within the curly braces
Parameters (optional)
Logic that executes inside the function body
Return parameters (optional)
//execute this code in the editor below

//an empty function called 'theFunction'
var theFunction = function(){
    // do something here
    // return a result if needed
}

//an function called 'theParamFunction'
var theParamFunction = function(num1, num2){
    //the function logic
    var result = num1 + num2;
    //return parameters
    return result;
};

//prints 3 on the console
console.log(theParamFunction(1,2));
Write your code here

var multiplyThem = function(paramOne, paramTwo){
	var res = paramOne * paramTwo;
  return res;
}
var ff = multiplyThem(2, 3);
console.log(ff);

var ff2 = multiplyThem(15,5)
console.log(ff2);

//execute this code in the editor below

​
//an empty function called 'theFunction'

var theFunction = function(){

    // do something here

    // return a result if needed

}


//an function called 'theParamFunction'

var theParamFunction = function(num1, num){

    //the function
    var result = num1 + num2;

    //return
    return result;

};

//prints 3 on the console
console.log(theParamFunction(1,2));
