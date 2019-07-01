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

    // $(".insights-img img")
    //   .fadeOut(400)
    //   .fadeIn(1000);
    $(".insights-img img").hide();
    $($(this).data("content")).fadeIn();
  });

  $(".accordion ul li").on("click", function() {
    $(this)
      .addClass("active")
      .parents("ul")
      .siblings()
      .find("li")
      .removeClass("active");
  });

  // trigger owl carousel
  $("#our-work-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1.24,
        dotsEach: true,
        dots: true,
        margin: 20,
        nav: false
      },
      600: {
        items: 3,
        margin: 30
      },
      1100: {
        items: 3.8
      }
    },
    navText: [
      "<div class='left-arrow'></div>",

      "<div class='right-arrow'></div>"
    ]
  });

  $(".owl-prev").on("click", function() {
    $(this).toggleClass("animation-arrow");
  });

  // latest slider
  $(".latest-slider").owlCarousel({
    loop: true,
    nav: true,
    margin: 40,
    dots: false,
    responsive: {
      0: {
        items: 1.24,
        dotsEach: true,
        margin: 20,
        dots: true,
        nav: false
      },
      600: {
        items: 2,
        margin: 30
      },
      1100: {
        items: 2.6
      }
    },
    navText: [
      "<div class='left-arrow'></div>",
      "<div class='right-arrow'></div>"
    ]
  });

  $(".navbar .navbar-toggler").on("click", function() {
    $(".navbar").toggleClass("navbar-show-mobile");
    $("html,body").toggleClass("overlay");
    $(this).toggleClass("transformed");
  });
});
