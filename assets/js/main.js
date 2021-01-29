$(document).ready(function () {
  $(".menu-btn").click(function () {
    $("body").addClass("mobile-active");
  });

  $(".close-btn").click(function () {
    $("body").removeClass("mobile-active");
  });

  $(".menu-overlay").click(function (e) {
    if (e.target == this) {
      $("body").removeClass("mobile-active");
    }
  });

  $(".mobile-dropdown").click(function () {
    $(this).find(".mobile-dropdown-content").slideToggle();
  });

  $(".signup-btn").click(function () {
    $(".login-tab").css("display", "none");
    $(".signup-tab").fadeIn("fast");
    $(".login-btn").css("background-color", "white").css("color", "#000");
    $(this).css("background-color", "#0000fe").css("color", "white");
  });
  $(".login-btn").click(function () {
    $(".signup-tab").css("display", "none");
    $(".login-tab").fadeIn("fast");
    $(".signup-btn").css("background-color", "white").css("color", "#000");
    $(this).css("background-color", "#0000fe").css("color", "white");
  });

  $("select").niceSelect();
});
