var slideIndex = 0;
showTrendSlides();
ashowTrendSlides(slideIndex);

function plusTrendSlides(n) {
  ashowTrendSlides(slideIndex += n);
}

function currentTrendSlide(n) {
  ashowTrendSlides(slideIndex = n);
}

function ashowTrendSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-trend");
  var dots = document.getElementsByClassName("dot-trend");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function showTrendSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides-trend");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showTrendSlides, 2000); // Change image every 2 seconds
}