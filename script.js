$(document).ready(function () {
  // navbar mobile
  $(".js-show-navbar-mobile").on("click", function () {
    $(".overlay, .navbar-mobile, .overlay-content").toggleClass("active");
  });

  $(".closebtn,.js-hide-navbar-mobile,.overlay").on("click", function () {
    $(".overlay, .navbar-mobile, .overlay-content").removeClass("active");
  });
  // handle btn event
  $(".navbar-story").mouseenter(function () {
    $(".navbar-story img").attr("src", function (index, attr) {
      return attr.replace("_Normal.png", "_Hover.png");
    });
  });
  $(".navbar-story").mouseleave(function () {
    $(".navbar-story img").attr("src", function (index, attr) {
      return attr.replace("_Hover.png", "_Normal.png");
    });
  });
});
