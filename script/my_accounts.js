document.addEventListener("DOMContentLoaded", function () {
  // gửi biểu mẫu đăng nhập
  const loginForm = document.querySelector(".login-form");
  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = loginForm.querySelector(".username").value;
      const password = loginForm.querySelector(".password").value;

      // Thực hiện xác thực đăng nhập
      console.log("Login attempt with", { username, password });

      // Kiểm tra xem tên người dùng và mật khẩu có được cung cấp không
      if (username.trim() === "" || password.trim() === "") {
          alert("Tên người dùng và mật khẩu là bắt buộc");
          return;
      }

      // Kiểm tra xem mật khẩu có ít nhất 6 ký tự không
      if (password.trim().length < 6) {
          alert("Mật khẩu phải có độ dài ít nhất 6 ký tự");
          return;
      }

      // đăng nhập thành công
      alert("Login successful!");
  });

  // Xử lý việc gửi biểu mẫu đăng ký
  const registerForm = document.querySelector(".register-form");
  registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = registerForm.querySelector(".email").value;

      // Thực hiện xác thực đăng ký
      console.log("Register attempt with", { email });

      // Chức năng xác thực email
      if (validateEmail(email)) {
          alert("Đăng ký thành công! Kiểm tra email của bạn để tìm liên kết để đặt mật khẩu mới.");
      } else {
          alert("địa chỉ email không hợp lệ");
      }
  });


  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
