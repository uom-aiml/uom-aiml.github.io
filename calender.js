let events = [
  {
    name: "first",
    desc: "This is a very long description i have used for testing",
    date: new Date(2020, 8, 30)
  },
  {
    name: "second",
    desc: "this is the second description",
    date: new Date(2020, 8, 30)
  },
  {
    name: "third",
    desc: "jefhejhjh3jrh3",
    date: new Date(2020, 8, 29)
  },
  {
    name: "fourth",
    desc: "jefhejhjh3jrh3",
    date: new Date(2020, 8, 16)
  },
  {
    name: "fourth",
    desc: "jefhejhjh3jrh3",
    date: new Date(2021, 0, 1)
  },
  {
    name: "fourth",
    desc: "jefhejhjh3jrh3",
    date: new Date(2021, 0, 1)
  },
  {
    name: "fourth",
    desc: "jefhejhjh3jrh3",
    date: new Date(2021, 0, 1)
  }
];

// day is 1 indexed
// month is 0 indexed


const days = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"]
const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY",
  "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const s_months = ["JAN", "FEB", "MAR", "APR", "MAY",
  "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];


const today = new Date();
var monthDisplayed = today.getMonth();
var yearDisplayed = today.getFullYear();


function displayMonth() {
  let startDay = new Date(yearDisplayed, monthDisplayed, 1).getDay();
  let noDays = new Date(yearDisplayed, monthDisplayed + 1, 0).getDate();
  // 0 = day before first day of the next month

  $("#calender-month-year").text((`${s_months[monthDisplayed]} ${yearDisplayed}`))
  $("#calender-wrapper").empty();
  for (let day of days) {
    $("<p/>", {
      class: "day day-text",
      html: day
    }).appendTo("#calender-wrapper");
  }

  eventsThisMonth = events.filter(event => event.date.getMonth() == monthDisplayed && event.date.getFullYear() == yearDisplayed);

  for (let i = 0-startDay; i < (6*7)-startDay; i++) {
    let day = $("<button/>", { html: i + 1 });

    if (i < 0 || i >= noDays) {
      $(day).addClass("invisible").appendTo("#calender-wrapper");
    } else {
      $(day).addClass("day clear-btn");
      $(day).prop("id", `${yearDisplayed}-${monthDisplayed}-${i + 1}`);

      eventsToday = eventsThisMonth.filter(event => event.date.getDate() == i + 1);

      if (eventsToday.length != 0) {
        $(day).addClass("has-event");
      }
      $(day).appendTo("#calender-wrapper");
    }
  }

  $(".day").click(function(event) { fillEvents(event.target.id) });
  // This event listener has to be applied everytime the month is created
  // to apply on the newly made day elements
}

function changeMonth(direction) {
  let today = new Date();
  if (direction == "left") {
    if (monthDisplayed == 0) {
      yearDisplayed -= 1;
      monthDisplayed = 11;
    } else {
      monthDisplayed -= 1;
    }
    if (monthDisplayed == today.getMonth() && yearDisplayed == today.getFullYear()) {
      $("#calender-month-left").prop("disabled", true);
    }
  } else {
    if (monthDisplayed == today.getMonth() && yearDisplayed == today.getFullYear()) {
      $("#calender-month-left").prop("disabled", false);
    }
    if (monthDisplayed == 11) {
      yearDisplayed += 1;
      monthDisplayed = 0;
    } else {
      monthDisplayed += 1;
    }
  }
  displayMonth();
}

function fillEvents(dateGiven) {
  $("#events-content").empty();

  let eventsShown = [...events];
  //  creates a copy of events

  if (typeof dateGiven !== "undefined") {

    let filter = new Date(...dateGiven.split("-"));
    eventsShown = eventsShown.filter(event => event.date.getTime() == filter.getTime());

  }

  if (eventsShown.length == 0) {
    $("#events-content").append("<p>No upcoming events.</p>");
  }

  for (event of eventsShown) {
    let dateInner = `<div class="event-card-day">${event.date.getDate()}</div>
                <div class="event-card-month">${s_months[event.date.getMonth()]}</div>`;
    let descInner = `<div class="event-card-name">${event.name}</div>
                <div class="event-card-desc">${event.desc}</div>`;

    let card = $("<div/>", {
      html: dateInner,
      class: "event-card-date"
    }).add($("<div/>", {
      html: descInner,
      class: "event-card-info"
    }));

    $("<div/>", {
      html: card,
      class: "event-card"
    }).appendTo("#events-content");
  }

  if (typeof dateGiven !== "undefined") {
    $("<button/>", {
      id: "reset-btn",
      html: "Reset",
      onClick: "fillEvents()"
    }).appendTo("#events-content");
  }
}

$(document).ready(function() {
  // SETTING UP

  events = events.sort((a, b) => a.date.getTime() - b.date.getTime());
  // Sorts events

  $(".simplebar-content").append("<div id='events-content'></div>");
  // Class simplebar content loads as a result of the data-simplebar attribute
  // Putting a div in there so we can insert events in that div

  $("#calender-month-left").prop("disabled", true);
  // User cannot see a month in the past

  displayMonth();
  fillEvents();

  // EVENT LISTENERS
  $("#calender-month-left").click(function() { changeMonth("left") });
  $("#calender-month-right").click(function() { changeMonth("right") });


});
