$(document).ready(function() {
  $('#login-form').submit(function(event) {
    event.preventDefault();
    if(validateLoginForm()){
      this.submit();
    }
  });

  $('#register-form').submit(function(event) {
    event.preventDefault();
    if(validateRegisterForm()){
      this.submit();
    }
  });

  $('.lost').click(function() {
    alert("Lost your password?");
  });
});

function validateLoginForm() {
  const username = $('.username').val();
  const password = $('.password').val();
  const errorMessages = [];

  if (username.length < 4) {
    errorMessages.push("Username must be at least 4 characters long.");
  }

  if (password.length < 5) {
    errorMessages.push("Password must be at least 5 characters long.");
  } else if (!/\d/.test(password)) {
    errorMessages.push("Password must contain at least one digit.");
  }

  if (errorMessages.length > 0) {
    $('#loginError').html(errorMessages.join("<br>"));
    return false;
  } else {
    $('#loginError').html("");
    alert("Login successful");
    $('#login-form')[0].reset();
    return true;
  }
}

function validateRegisterForm() {
  const email = $('.email').val();
  const errorMessages = [];

  // Kiểm tra email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      errorMessages.push("Email is invalid.");
  }

  // Hiển thị thông báo lỗi
  if (errorMessages.length > 0) {
      $('#registerError').html(errorMessages.join("<br>"));
      return false;
  } else {
      $('#registerError').html("");
      alert("Registration successful");
      $('#register-form')[0].reset();
      return true;
  }
}
