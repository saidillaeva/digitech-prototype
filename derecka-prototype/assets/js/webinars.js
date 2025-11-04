const correctPassword = "digitech2025";

document.getElementById("submit-password").addEventListener("click", () => {
  const password = document.getElementById("webinar-password").value;
  const content = document.getElementById("webinar-content");
  const error = document.getElementById("error-text");

  if (password === correctPassword) {
    content.style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "Incorrect password. Try again.";
  }
});
