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
  


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }  

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("content-5__body--slideshow");
  let dots = document.getElementsByClassName("content-5__tag__icon--items");
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