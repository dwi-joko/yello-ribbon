// $("#myCarousel").carousel({
//   interval: 10000,
// });

// $(".carousel .item").each(function () {
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(":first");
//   }
//   next.children(":first-child").clone().appendTo($(this));

//   if (next.next().length > 0) {
//     next.next().children(":first-child").clone().appendTo($(this));
//   } else {
//     $(this).siblings(":first").children(":first-child").clone().appendTo($(this));
//   }
// });

// $(window).load(function () {
//   // cache container
//   var $container = $("#isotope_container");

//   // initialize isotope
//   $container.isotope({
//     // options...
//     animationEngine: "best-available",
//     itemSelector: ".isotope_selector",
//   });

//   // filter items when filter link is clicked
//   $("#isotope_filters li a").on("click", function () {
//     var selector = $(this).data("filter");
//     $container.isotope({
//       filter: selector,
//     });
//   });
// });

// $("#slideshow > div:gt(0)").hide();

// setInterval(function () {
//   $("#slideshow > div:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slideshow");
// }, 3000);
