$("#landing-button").click(function() {
  $('html, body').animate({
    scrollTop: $('#title').offset().top
  }, 700);
});
$("#home-button").click(function() {
  $('html, body').animate({
    scrollTop: $('#landing').offset().top
  }, 700);
});
$("#skills-button").click(function() {
  $('html, body').animate({
    scrollTop: $('#skills').offset().top
  }, 700);
});
$("#experience-button").click(function() {
  $('html, body').animate({
    scrollTop: $('#experience').offset().top
  }, 700);
});
$("#about-button").click(function() {
  $('html, body').animate({
    scrollTop: $('#about-me').offset().top
  }, 700);
});
$("#portfolio-button").click(function() {
  $('html, body').animate({
    scrollTop: $('#portfolio').offset().top
  }, 700);
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= 50) {

    $('.navbar').addClass('transparent');
  } else {
    $('.navbar').removeClass('transparent');

  }
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate({
    scrollTop: $('#landing').offset().top
  }, 700);
}
