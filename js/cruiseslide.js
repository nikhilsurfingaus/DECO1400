//Intilialise current slide count
var slideIndex1 = 1;

//Display slide with index counter
showSlides(slideIndex1);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex1 = n);
}

//show slide given index 
function showSlides(n) {
  var i;
  //Get current slide and dot identifier 
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot1");
  //Check if we are at the end or if we need to start again
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  //Hides all slides from the DOM
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //removes "active" class from all of the dots in slideshow
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Changing visiblity from none to visible
  slides[slideIndex1-1].style.display = "block";
  //adds the active class to the dot of index slideIndex-1
  dots[slideIndex1-1].className += " active";
}