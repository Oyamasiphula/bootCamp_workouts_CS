var validateInputAndParseCorrectValue = function(inputValueTextBoxVal){
  if (inputValueTextBoxVal.trim().length === 0 || typeof(inputValueTextBoxVal) === Number) {
      alert("Please enter a valid regstration !");
      return
  }
  return inputValueTextBoxVal;
}
