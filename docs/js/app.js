var $ = require("jQuery");

$(function() {
  var $menuIcon = $(".header-menu-icon");
  var $disclosure = $(".header-disclosure");
  var $closeIcon = $(".header-close-icon");

  $menuIcon.on("click", () => {
    $disclosure.slideDown(300);
    $menuIcon.fadeOut(200);
    setTimeout(() => {
      $closeIcon.fadeIn(150);
    }, 320);
  });

  $closeIcon.on("click", () => {
    $disclosure.slideUp(300);
    $closeIcon.fadeOut(200);
    setTimeout(() => {
      $menuIcon.fadeIn(150);
    }, 320);
  });
});
