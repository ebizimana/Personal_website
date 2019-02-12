// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// Configure Slider
$(".carousel").carousel({
  interval: 6000,
  pause: "hover"
});

// Hide the collapse
$(".port-item").click(function() {
  $(".collapse").collapse("hide");
});

// Init Slick
$(".slider").slick({
  dots: true,
  infinite: true,
  slideToShow: 1
});

// Smooth Scrolling
$("#main-nav a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// Init Popovers
$('[data-toggle="popover"]').popover({
  trigger: "hover"
});

// Init Lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
