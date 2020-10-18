// day is 1 indexed
// month is 0 indexed - so jan is 0

let events = [
  {
    name: "Virtual Society Fair (Undergrad)",
    desc: "Visit our society's virtual stall at the University of Manchester's SU Fair for undergraduate students.",
    date: new Date(2020, 9, 6)
  },
  {
    name: "Harry Potter Escape Room Social",
    desc: "Come on over to our first social, it will be a Harry Potter style virtual escape room.",
    date: new Date(2020, 9, 1)
  },
  {
    name: "Virtual Society Fair (Postgrad)",
    desc: "Visit our society's virtual stall at the University of Manchester's SU Fair for postgraduate students.",
    date: new Date(2020, 9, 9)
  },
  {
    name: "Society Expo",
    desc: "Watch our society's video during the academic society expo, and learn more about the society and the committee.",
    date: new Date(2020, 9, 5)
  },
  {
    name: "Beginners Workshop: What is Machine Learning?",
    desc: "This workshop led by Gassan, the Head of Tech, will introduce the basic concepts of ML, including basic notation, stats and curve fitting.",
    date: new Date(2020, 9, 13)
  },
  {
    name: "Lecture: Time-Series and Forecasting",
    desc: "Our first lecture will be on Bike Sharing, Time-Series and Forecasting, led by Yann, one of our project managers.",
    date: new Date(2020, 9, 20)
  },
  {
    name: "Advanced Workshop: Time-Series and Forecasting",
    desc: "This workshop will follow on from our lecture on Bike Sharing, Time-Series and Forecasting.",
    date: new Date(2020, 9, 21)
  },
  {
    name: "Beginners Workshop: What makes up a learning algorithm?",
    desc: "This workshop will discuss datasets, cost functions, optimization routines, parameter fitting and hyperparameters.",
    date: new Date(2020, 9, 27)
  },
  {
    name: "Lecture: Natural Language Understanding",
    desc: "Our second lecture on Natural Language Understanding with BERT, led by Mateusz, the president of the society.",
    date: new Date(2020, 10, 3)
  },
  {
    name: "Advanced Workshop: Natural Language Understanding",
    desc: "This workshop will follow on from our lecture on Natural Language Understanding.",
    date: new Date(2020, 10, 4)
  },
  {
    name: "Beginners Workshop: Traditional learning algorithms",
    desc: "This workshop will discuss Linear Regression, Logistic Regression, Decision Trees, Random Forest, SVM and k-Nearest Neighbors.",
    date: new Date(2020, 10, 10)
  },
  {
    name: "Lecture: Adversarial Attacks on CNNs",
    desc: "Our third lecture will be on Adversarial Attacks on CNNs and Blackbox Attacks, led by Ivan, one of our project managers.",
    date: new Date(2020, 10, 17)
  },
  {
    name: "Advanced Workshop: Adversarial Attacks on CNNs",
    desc: "This workshop will follow on from our lecture on Adversarial Attacks on CNNs and Blackbox Attacks.",
    date: new Date(2020, 10, 18)
  },
  {
    name: "Beginners Workshop: Basics of Neural Nets",
    desc: "This workshop will look at Feedforward neural network architecture and Deep Learning Basics.",
    date: new Date(2020, 10, 24)
  },
  {
    name: "Lecture 4",
    desc: "TBC",
    date: new Date(2020, 11, 1)
  },
  {
    name: "Advanced Workshop 4",
    desc: "TBC",
    date: new Date(2020, 11, 2)
  },
  {
    name: "Beginners Workshop: Covnets and Sequential Models",
    desc: "This workshop will look at use cases of Covnets and Sequential Models and discuss where and why they supersede fully connected neural network architectures.",
    date: new Date(2020, 11, 8)
  },
  {
    name: "Lecture 5",
    desc: "TBC",
    date: new Date(2020, 11, 15)
  },
  {
    name: "Advanced Workshop 5",
    desc: "TBC",
    date: new Date(2020, 11, 16)
  },
];

// day is 1 indexed
// month is 0 indexed - so jan is 0


const days = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"]
const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY",
  "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const s_months = ["JAN", "FEB", "MAR", "APR", "MAY",
  "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];


const today = new Date();
var dateDisplayed = today.getDate();
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
    $("#events-content").append("<p>No upcoming events on this day.</p>");
  }

  for (event of eventsShown) {
    if (typeof dateGiven === "undefined") {
      if (event.date.getDate()<dateDisplayed){
        continue
      }
    }
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

// Backup scrollbar code for fill events
// function fillEvents(dateGiven) {
//   var container;
//   if ($("#events-content").length == 0) {
//     // if simplebar isnt working
//     container = "#events-wrapper";
//   } else {
//     container = "#events-content";
//   }
//
//   $(container).empty();
//
//   let eventsShown = [...events];
//   //  creates a copy of events
//
//   if (typeof dateGiven !== "undefined") {
//
//     let filter = new Date(...dateGiven.split("-"));
//     eventsShown = eventsShown.filter(event => event.date.getTime() == filter.getTime());
//
//   }
//
//   if (eventsShown.length == 0) {
//     $(container).append("<p>No upcoming events.</p>");
//   }
//
//   for (event of eventsShown) {
//     let dateInner = `<div class="event-card-day">${event.date.getDate()}</div>
//                 <div class="event-card-month">${s_months[event.date.getMonth()]}</div>`;
//     let descInner = `<div class="event-card-name">${event.name}</div>
//                 <div class="event-card-desc">${event.desc}</div>`;
//
//     let card = $("<div/>", {
//       html: dateInner,
//       class: "event-card-date"
//     }).add($("<div/>", {
//       html: descInner,
//       class: "event-card-info"
//     }));
//
//     $("<div/>", {
//       html: card,
//       class: "event-card"
//     }).appendTo($(container));
//   }
//
//   if (typeof dateGiven !== "undefined") {
//     $("<button/>", {
//       id: "reset-btn",
//       html: "Reset",
//       onClick: "fillEvents()"
//     }).appendTo($(container));
//   }
//
// }

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
