let btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();  

  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let isValid = true;  

  if (username.value.length < 5) {
    alert("Username must be at least 5 characters.");
    isValid = false; 
  }

  if (password.value.length < 8) {
    alert("Password must be at least 8 characters.");
    isValid = false; 
  }

  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email.");
    isValid = false;  
  }

  if (isValid) {
    fetch('https://66ef2b583ed5bb4d0bf2f4ac.mockapi.io/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      if (json) {
        window.location.href = "namepage.html";  // الانتقال إلى صفحة success.html
      }
    })
  } else {
    console.log("Form is not valid. Data will not be sent.");
  }
});
