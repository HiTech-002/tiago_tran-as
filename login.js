function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('login-msg');

  if (user === "tiago" && pass === "tigs123") {
    window.location.href = "home.html";
  } else {
    msg.textContent = "Usuário ou senha incorretos.";
    msg.style.color = "red";
  }
}
