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
  