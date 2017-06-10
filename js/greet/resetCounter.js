var resetCounter = function() {
    localStorage.clear()
    factoryFunction = counter({})
    count = 0;
    document.querySelector("#totalNumOfGreetings").innerHTML = "A greet counter has been reset to : " + count;
}
