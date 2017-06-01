var resetCounter = function() {
    window.myStorage.removeItem("count");
    count = 0;
    window.myStorage.setItem("count", count)
    document.querySelector("#totalNumOfGreetings").innerHTML = count;
}
