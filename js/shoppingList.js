var shoppingList = function(str) {
    var list = str.split(", ");
    var holdList = [];
    console.log('Shopping list:');
    holdList.push('Shopping list:');

    for (var i = 0; i < list.length; i++) {
        console.log("* " + list[i]);
        holdList.push("* " + list[i]);
    }
    return holdList;
}
