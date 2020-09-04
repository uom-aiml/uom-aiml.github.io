// index js
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
