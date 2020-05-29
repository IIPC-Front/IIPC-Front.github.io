$('.main-gallery').flickity({
    // options
    cellAlign: 'center',
    contain: true
  });

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 

$('.main-nav li ul a').on('click', function(e) { 
  var el = $( e.target.getAttribute('href') );
  var elOffset = el.offset().top;
  var elHeight = el.height();
  var windowHeight = $(window).height();
  var offset;

  if (elHeight < windowHeight) {
    offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
  }
  else {
    offset = elOffset;
  }

  $.smoothScroll({ speed: 700 }, offset);
  return false;
});
