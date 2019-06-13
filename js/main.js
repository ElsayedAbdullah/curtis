$(function() {
  // add class active on navbar link
  $(".navbar .navbar-nav li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  // add class active on link in insights section
  $(".insights .insights-content ul li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    $(".insights-img img")
      .fadeOut(400)
      .fadeIn(1000);
  });

  // trigger owl carousel
  $(".our-work-slider").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3.55
      }
    },
    navText: [
      "<div class='left-arrow'>" +
        "<span class='top-head-arrow'></span>" +
        "<span class='down-head-arrow'></span>" +
        "</div>",

      "<div class='right-arrow'>" +
        "<span class='top-head-arrow'></span>" +
        "<span class='down-head-arrow'></span>" +
        "</div>"
    ]
  });
  // latest slider
  $(".latest-slider").owlCarousel({
    loop: true,
    stagePadding: 50,
    nav: true,
    responsive: {
      0: {
        items: 1.5
      },
      600: {
        items: 2
      },
      1000: {
        items: 2.35
      }
    },
    navText: [
      "<div class='left-arrow'>" +
        "<span class='top-head-arrow'></span>" +
        "<span class='down-head-arrow'></span>" +
        "</div>",

      "<div class='right-arrow'>" +
        "<span class='top-head-arrow'></span>" +
        "<span class='down-head-arrow'></span>" +
        "</div>"
    ]
  });
});
