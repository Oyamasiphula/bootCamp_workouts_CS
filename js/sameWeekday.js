var sameWeekday = function(date1,date2){
  	var isSameDay = new Date(date1).getDay() === new Date(date2).getDay();
    return isSameDay;
}
