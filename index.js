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

// <div class="row">
//   <div class="col-sm-5 section-purple d-flex justify-content-center inner-about-section"
//        style="text-align:center; padding-left: 5%; padding-right:5%;">
//      <!-- <i class="fas fa-trophy fa-10x trophy-img"></i> -->
//      <img src="assets/trophy.png"/>
//      <br>
//      <h3>Voted the Top 10 Academic Society for two years in a row.</h3>
//   </div>
//   <div class="col-sm-7 section-white d-flex justify-content-start inner-about-section">
//     <h1>About Us</h1>
//     <img src="assets/society-picture.jpg" alt="society members in a meeting" style="width:auto; max-height:256px; display:inline;" />
//     <br>
//     <h5>Welcome, we are the AI/ML society at the University of Manchester. We are a group of AI loving, machine learning enthusiasts with a
//     passion to teach and share our interest with others. We do several events such as
//     basic and advanced workshops, guest lectures, and also social events which are a chance
//     to relax and socialise.
//     You don’t need to be studying Computer Science to join,
//     all you need is an interest in AI/ML. So no matter if you’re a beginner or advanced, join our society today.
//     </h5>
//     <!-- <h3 style="margin-top:3%;">Our Sponsors</h3>
//     <h5> Coming soon ... </h5> -->
//   </div>
// </div>
