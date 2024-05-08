//add your js code here
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let userData = JSON.parse(localStorage.getItem("userInfo"));

  if (userData?.email === email && userData?.password === password) {
    const confirmation = confirm("User Logged in successfully!");

    if (confirmation) {
      window.location.href = "bodyCare.html";
    }
  } else {
    alert("Incorrect credentials");
  }
});
