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

  $(".navbar-game-play").mouseenter(function () {
    $(".navbar-game-play img").attr("src", function (index, attr) {
      return attr.replace("_Normal.png", "_Hover.png");
    });
  });
  $(".navbar-game-play").mouseleave(function () {
    $(".navbar-game-play img").attr("src", function (index, attr) {
      return attr.replace("_Hover.png", "_Normal.png");
    });
  });

  $(".navbar-feature").mouseenter(function () {
    $(".navbar-feature img").attr("src", function (index, attr) {
      return attr.replace("_Normal.png", "_Hover.png");
    });
  });
  $(".navbar-feature").mouseleave(function () {
    $(".navbar-feature img").attr("src", function (index, attr) {
      return attr.replace("_Hover.png", "_Normal.png");
    });
  });

  $(".navbar-roadmap").mouseenter(function () {
    $(".navbar-roadmap img").attr("src", function (index, attr) {
      return attr.replace("_Normal.png", "_Hover.png");
    });
  });
  $(".navbar-roadmap").mouseleave(function () {
    $(".navbar-roadmap img").attr("src", function (index, attr) {
      return attr.replace("_Hover.png", "_Normal.png");
    });
  });
});
