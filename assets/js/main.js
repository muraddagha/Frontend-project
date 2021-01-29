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
});
