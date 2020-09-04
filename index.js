// index js

// Temproary fix - start page from top when reloaded
// $(document).ready(function(){
//     $(this).scrollTop(0);
// });
// $(window).on('beforeunload', function(){
//   $(window).scrollTop(0);
// });

// This prevents the page from scrolling down to where it was previously.
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
// This is needed if the user scrolls down during page load and you want to make sure the page is
// scrolled to the top once it's fully loaded. This has Cross-browser support.
window.location.reload(true);
window.scrollTo(0,0);


$(document).ready(function(){
  $(document).scroll(function() {
    var about_top = $(".about-section").offset().top;
    var about_bottom = about_top + $(".about-section").outerHeight(true);
    $(".social-icon").each(function() {
      var icon_top = $(this).offset().top;
      var icon_bottom = icon_top + $(this).outerHeight(true);
      if (about_top <= icon_bottom && icon_bottom <= about_bottom) {
        $(this).css('color', 'white');
        var icon_type = "white";
        if (icon_type == "white"){
          $(this).hover(function(){
            $(this).css("color", "#5fcad8");
            }, function(){
            $(this).css("color", "white");
          });
        }
      }
      else {
        $(this).css('color', '#a915cb');
        var icon_type = "purple";
        if (icon_type == "purple"){
          $(this).hover(function(){
            $(this).css("color", "#5fcad8");
            }, function(){
            $(this).css("color", "#a915cb");
          });
        }
      }
    });
  });
});
