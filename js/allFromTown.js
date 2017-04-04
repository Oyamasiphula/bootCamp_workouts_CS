var allFromTown = function(regNumbersCSVString,location){
	var splitStr = regNumbersCSVString.split(",");
  	var holdRegNumsFromThisLoc = [];

  for(let i = 0; i<splitStr.length; i++){
        var rmSpacesFromVal = splitStr[i].trim();
        if(rmSpacesFromVal.startsWith(location)){
        holdRegNumsFromThisLoc.push(rmSpacesFromVal)
      }
   }
	return holdRegNumsFromThisLoc;
};
