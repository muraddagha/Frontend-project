// new WOW().init();
$(document).ready(function () {
  $(window).on("load", function () {
    $("#loader").fadeOut("slow", function () {
      $(this).remove();
    });
    $(function () {
      if ($(".wow").length) {
        var wow = new WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
      }
    });
  });
  $(window).scroll(function () {
    $(".navigation-bar").toggleClass(
      "fixed-navigation-bar",
      window.scrollY > 75
    );
  });
  $(window).scroll(function () {
    if (window.scrollY > 115) {
      $(".scroll-up").fadeIn().css("display", "flex");
    }
    if (window.scrollY < 115) {
      $(".scroll-up").fadeOut();
    }
  });
  $(".scroll-up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100, "swing");
  });

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

  $(".testimonials-slider").owlCarousel({
    loop: true,
    items: 3,
    dots: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $(".latset-news-slider").owlCarousel({
    loop: true,
    items: 3,
    dots: true,
    margin: 30,
    responsive: {
      0: { items: 1 },
      705: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
