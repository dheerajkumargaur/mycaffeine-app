//add your js code here
const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  const user = {
    fullname: fullname,
    email: email,
    phone: phone,
    password: password,
  };

  if (!fullname || !email || !phone || !password) {
    alert("Please fill all the fields");
    return;
  }

  localStorage.setItem("userInfo", JSON.stringify(user));

  const confirmation = confirm("User registered successfully!");

  if (confirmation) {
    window.location.href = "login.html";
  }
});
