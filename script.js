function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (email === "admin@1234" && password === "1234") {
    localStorage.setItem("isloggedIn", "true");
    localStorage.setItem("user", email);

    window.location.href = "home.html";
  } else {
    error.innerHTML = "Invalid email and password";
  }
}


function togglePassword() {
  let passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") 
    {
        passwordInput.type = "text";
    } else {
    passwordInput.type = "password";
  }
}


function toggleMenu() 
{
  let menu=document.getElementById("navMenu");
  let icon=document.getElementById("menuIcon");

  menu.classList.toggle("shows");

  if(menu.classList.contains("shows"))
  {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}