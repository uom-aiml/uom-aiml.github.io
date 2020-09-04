// index js

// Temproary fix - start page from top when reloaded
// Scroll the page to the top on reload
// if ('scrollRestoration' in history) {
//     history.scrollRestoration = 'manual';
// }

// This has Cross-browser support.
// For if the user scrolls down during reload - makes sure page is scrolled to the top when reloaded.
// window.scrollTo(0,0);


$(document).ready(function(){
  $(".social-icon").hover(function() {
    $(this).addClass("social-icon-hover");
  }, function() {
    $(this).removeClass("social-icon-hover");
  });

  function checkColour() {
    var about_top = $(".about-section").offset().top;
    var about_bottom = about_top + $(".about-section").outerHeight(true);
    $(".social-icon").each(function() {
      var icon_top = $(this).offset().top;
      var icon_bottom = icon_top + $(this).outerHeight(true);
      if (about_top <= icon_bottom && icon_bottom <= about_bottom) {
        $(this).css("color", "white");
      } else {
        $(this).css("color", "#a915cb");
      }
    });
  }

  checkColour();
  $(document).scroll(checkColour);
});
