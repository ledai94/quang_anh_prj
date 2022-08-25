$(document).ready(function () {
  $(".block-game-play__slideshow").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });
  // action sidenav menu overlay
  $(".js-show-navbar-mobile").on("click", function () {
    $(".overlay, .navbar-mobile, .overlay-content").toggleClass("active");
  });

  $(".closebtn,.js-hide-navbar-mobile,.overlay").on("click", function () {
    $(".overlay, .navbar-mobile, .overlay-content").removeClass("active");
  });
});
