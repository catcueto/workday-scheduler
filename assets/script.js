// declare variables
var index = 0;
var container = document.querySelector(".container");
var today = $("#currentDay");
var day = $("#calendarDay");

// display date and time on screen
function displayToday() {
  var currentDay = moment().format("LLLL");
  today.text(currentDay);
}
displayToday();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
//PSEUDOCODE
// STEP 1: After opening the planner, the correct day is displayed at the top (Thursday, September 2nd) --> uses time API
// STEP 2: When I scroll down, I see a planner (8am-10pm); incldues  time, space to add notes/content + SAVE button --> see HTMl file
// STEP 3: When viewing the timeblocks for such day, each timeblock is color coded to indicate whether it's past, present, or future (gray = past, violent = current, blue = future)
// STEP 4: When I click on a timeblock, I can enter an event.
// STEP5: If I click the SAVE btn, then the event info is saved in local storage
// STEP 6: When I refresh the page, the saved event is constantly displayed
