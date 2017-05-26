var filter = function(capturedRegPlates) {
    for (var i = 0; i < initEmptyRegList.length; i++) {
        let eachPlate = initEmptyRegList[i].reg;
        if (eachPlate.startsWith(getRadioValue(radios))) {
            capturedRegPlates.push({
                "reg": eachPlate
            });
        }
    };
    return capturedRegPlates;
};
