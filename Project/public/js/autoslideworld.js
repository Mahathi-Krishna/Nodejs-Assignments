var slideIndex = 1;
showWorldSlides(slideIndex);

function plusWorldSlides(n) {
  showWorldSlides(slideIndex += n);
}

function currentWorldSlide(n) {
  showWorldSlides(slideIndex = n);
}

function showWorldSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-world");
  var dots = document.getElementsByClassName("dot-world");
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
