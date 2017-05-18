var days = document.querySelectorAll(".day"),
    date1 = document.querySelector(".date1"),
    date2 = document.querySelector(".date2");

var backButtonElement = document.querySelector("#backButton");


function matchingDays(dateInputs) {
  dateInputs.addEventListener("change", function() {

    var date1Val = new Date(date1.value),
        date1day = date1Val.getDay();

    var date2Val = new Date(date2.value),
        date2day = date2Val.getDay();

      for (var i = 0; i < days.length; i++) {

          if (date1day === Number(days[i].dataset.weekId)) {
            days[i].style.backgroundColor = "blue";
          }
          if (date2day === Number(days[i].dataset.weekId)) {
            days[i].style.backgroundColor = "red";
          }
          if (date1day === Number(days[i].dataset.weekId) && date2day === Number(days[i].dataset.weekId)) {
              days[i].style.backgroundColor = "green";
          }
          if (date1day !== Number(days[i].dataset.weekId) && date2day !== Number(days[i].dataset.weekId)) {
              days[i].style.backgroundColor = "";
          }
      };
  });
}
matchingDays(date1);
matchingDays(date2);

var strLink = 'file:///home/oyama/projects/Codex_Repo/bootCamp_workouts_CS/index.html';
var goBackToMain = function() {
    window.location.href = strLink;
}
backButton.addEventListener('click', goBackToMain);
