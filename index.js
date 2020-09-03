// index js
$(document).ready(function(){
   var about_top = $(".about-section").offset().top;
   var about_bottom = about_top + $(".about-section").outerHeight(true);
   $(document).scroll(function() {
      $(".social-icon").each(function() {
        var icon_top = $(this).offset().top;
        var icon_bottom = icon_top + $(this).outerHeight(true);
        if (about_top <= icon_bottom && icon_bottom <= about_bottom) {
            $(this).css('color', 'white');
         } else {
            $(this).css('color', '#a915cb');
         }
      });
   });

});
