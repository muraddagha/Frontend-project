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

  $('[data-fancybox="video"]').fancybox({
    buttons: ["share", "fullScreen", "close"],

    autoplay: "autoplay",
    iframe: {
      css: {
        width: "80%",
      },
    },
  });

  $(".categories-slider").owlCarousel({
    loop: true,
    items: 3,
    dots: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      705: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});
