var createUniqList = function(list, key) {
    var organizedShoePropColl = [],
        organizedShoePropMap = {};

    for (var i = 0; i < list.length; i++) {
        var obj = list[i];
        var val = obj[key];

        if (organizedShoePropMap[val] === undefined) {
            organizedShoePropMap[val] = val;
            organizedShoePropColl.push({
                [key]: val
            });
        }
    };
    return organizedShoePropColl;
}
