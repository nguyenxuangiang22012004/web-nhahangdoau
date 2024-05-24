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
  let dots2 = document.getElementsByClassName("content-1__items4--cuon__items");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" cuon", "");
    
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}


function smoothScroll(targetElement) {
  var targetPosition = targetElement.offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 1000; // Thời gian cuộn (milliseconds)

  var start = null;
  window.requestAnimationFrame(step);

  function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
      if (progress < duration) {
          window.requestAnimationFrame(step);
      }
  }

  // Hàm cân bằng giữa tốc độ cuộn
  function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }
}

window.onload = function() {
  // Lấy định danh của phần tử cần cuộn đến từ URL
  var hash = window.location.hash;

  // Nếu tồn tại định danh, thực hiện cuộn đến phần tử có id tương ứng
  if (hash) {
      var targetElement = document.querySelector(hash);
      if (targetElement) {
          smoothScroll(targetElement);
      }
  }
}



function moveToCenter(id) {
  var clickedBox = document.getElementById(id);
  var container = document.querySelector('.content-10__body--box__content');
  var middleIndex = Math.floor(container.children.length / 2);

  // Remove the clicked box from its current position
  clickedBox.remove();

  // Insert the clicked box at the middle position
  container.insertBefore(clickedBox, container.children[middleIndex]);
}












