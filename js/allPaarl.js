var allPaarl = function(regNumbersCSVString){
  const  genPlateNumberList = [];
  const regNumbers = regNumbersCSVString.split(", ");

    for(let i=0; i<regNumbers.length; i++){
      if(regNumbers[i].startsWith("CJ")){
		genPlateNumberList.push(regNumbers[i]);
         }
    }
  return genPlateNumberList;
};
