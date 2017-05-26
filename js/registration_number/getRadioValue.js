var getRadioValue = function(radioListOptions) {
  let radioOptValue = "";
  radioListOptions.forEach(function(actualOption) {
    if (actualOption.type === 'radio' && actualOption.checked) {
      // get value, set checked flag (update the value to gain access )or do whatever I need to
      val = actualOption.value;
      radioOptValue = val
    }
  });
  return radioOptValue;
};
