// DECLARE VARIABLES
const index = 0;
const container = $(".container");
const today = $("#currentDay");
const day = $("#calendarDay");

// DISPLAY DATE AND TIME ON SCREEN
function displayToday() {
  const currentDay = moment().format("LLLL");
  today.text(currentDay);
}
displayToday();

// COLOR CODED EVENTS BASED ON TIME EVENTS
const presentHour = moment().hour(); //current time from moment.js

function timeblockTracker() {
  //highlight row based on time
  $(".event-description").each(function () {
    //.each is used to iterate over an object or an array
    let colorCode = parseInt($(this).attr("id").split("-")[1]); // parseInt parses a string and returns an integer
    // this keyword: allows us to access the value; js wraps this value as an object
    console.log(colorCode);
    if (colorCode < presentHour) {
      //if timeblock is is in the past...
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (colorCode === presentHour) {
      //if timerblock is in the present...
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      // future
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
timeblockTracker();

const hourID = localStorage.getItem("time", []);
const events = $(".event-description");

// SAVE BUTTON
let saveBtn = $(".saveBtn");

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  hourID.push({
    time: saveBtn.value,
    event: events.textContent,
  });

  console.log(hourID);
  localStorage.setItem("time").JSON.stringify(hourID);
});

//   hourID.push({})

//   const hourID = $(this).siblings("textarea").attr("id");
//   const textInput = $(this).siblings(".event-description").val();
//   console.log(hourID, textInput);
//   S;
//   //.siblings do ...
//   localStorage.setItem(hourID, textInput);
//   var savedEvents = localStorage.getItem(id);
//   console.log(savedEvents);
// });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
//PSEUDOCODE
// STEP 1: After opening the planner, the correct day is displayed at the top (Thursday, September 2nd) --> uses time API
// STEP 2: When I scroll down, I see a planner (8am-10pm); incldues  time, space to add notes/content + SAVE button --> see HTMl file
// STEP 3: When viewing the timeblocks for such day, each timeblock is color coded to indicate whether it's past, present, or future (gray = past, violent = current, blue = future)
// STEP 4: When I click on a timeblock, I can enter an event.
// STEP5: If I click the SAVE btn, then the event info is saved in local storage
// STEP 6: When I refresh the page, the saved event is constantly displayed
