//Intilialise current slide count
var slideIndex = 1;

//Display slide with index counter
showSlides3(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides3(slideIndex += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex = n);
}

//show slide given index 
function showSlides3(n) {
  var i;
  //Get current slide and dot identifier 
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
  //Check if we are at the end or if we need to start again
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  //Hides all slides from the DOM
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //removes "active" class from all of the dots in slideshow
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Changing visiblity from none to visible
  slides[slideIndex-1].style.display = "block";
  //adds the active class to the dot of index slideIndex-1
  dots[slideIndex-1].className += " active";
}