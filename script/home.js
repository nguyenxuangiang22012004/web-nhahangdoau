let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("content-5__content--box__slideshow");
  let dots = document.getElementsByClassName("content-5__menu--items");
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



let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let i;
  let slides2 = document.getElementsByClassName("content-1__block1__slideshow");
  /*let dots2 = document.getElementsByClassName("content-1__items4--cuon__items");*/
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  /*for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" cuon", "");
  }*/
  slides2[slideIndex2-1].style.display = "block";  
  /*dots2[slideIndex2-1].className += " active";*/
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}


