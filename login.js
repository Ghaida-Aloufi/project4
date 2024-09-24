const pass = document.getElementById("password");
const username = document.getElementById("username");
const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (username.value.length < 5) {
    alert("Username must be at least 5 characters.");
    return;
  }

  if (pass.value.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  fetch('https://66ef2b583ed5bb4d0bf2f4ac.mockapi.io/login')
    .then((response) => response.json())
    .then((users) => {
      // التحقق من بيانات المستخدم
      const user = users.find(u => u.username === username.value && u.pass === pass.value);
      
      if (user) {
        localStorage.setItem('username', user.username);
        window.location.href = "quzepage.html";
      } else {
        alert("Login failed. Please check your username and password.");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("There was a problem connecting to the server.");
    });
});
