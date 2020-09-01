let events = [
  {
    name: "first",
    desc: "This is a very long description i have used for testing as word wrap is not working hm but now it works but not when it has no spaces hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
    date: new Date(2020, 8, 30)
  },
  {
    name: "second",
    desc: "jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3jefhejhjh3jrh3",
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
  // {
  //   name: "fourth",
  //   desc: "jefhejhjh3jrh3",
  //   date: new Date(2021, 0, 1)
  // }
];


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

  $("#month-year").text((`${s_months[monthDisplayed]} ${yearDisplayed}`))
  $("#calender-wrapper").empty();
  for (let day of days) {
    $("<p/>", {
      class: "day day-text",
      html: day
    }).appendTo("#calender-wrapper");
  }

  eventsThisMonth = events.filter(event => event.date.getMonth() == monthDisplayed);

  for (let i = 0-startDay; i < (6*7)-startDay; i++) {
    let day = $("<p/>", { html: i + 1 });

    if (i < 0 || i >= noDays) {
      $(day).addClass("invisible").appendTo("#calender-wrapper");
    } else {
      $(day).addClass("day");
      eventsToday = eventsThisMonth.filter(event => event.date.getDate() == i + 1);

      if (eventsToday.length != 0) {
        $(day).addClass("has-event");
      }
      $(day).appendTo("#calender-wrapper");

      // id: `${i+1}/${monthDisplayed}/${yearDisplayed}`,
    }
  }
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
      $("#switch-month-left").prop("disabled", true);
    }
  } else {
    if (monthDisplayed == today.getMonth() && yearDisplayed == today.getFullYear()) {
      $("#switch-month-left").prop("disabled", false);
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

function fillEvents() {
  for (event of events) {
    let date_inner = `<div class="event-card-day">${event.date.getDate()}</div>
                <div class="event-card-month">${s_months[event.date.getMonth()]}</div>`;
    let desc_inner = `<div class="event-card-name">${event.name}</div>
                <div class="event-card-desc">${event.desc}</div>`;

    let card = $("<div/>", {
      html: date_inner,
      class: "event-card-date"
    }).add($("<div/>", {
      html: desc_inner,
      class: "event-card-info"
    }));

    $("<div/>", {
      html: card,
      class: "event-card"
    }).appendTo("#events-wrapper");

  }
}

$(document).ready(function() {
  events = events.sort((a, b) => a.date.getTime() - b.date.getTime());

  $("#switch-month-left").prop("disabled", true);

  $("#switch-month-left").click(function() { changeMonth("left") });
  $("#switch-month-right").click(function() { changeMonth("right") });

  displayMonth();
  fillEvents();


  // $("#switch-view").click(function() {
  //   console.log("hm");
  //   $("#events").toggle();
  //   $("#calender").toggle();
  // });



});
