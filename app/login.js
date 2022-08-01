const btn = document.querySelector("[data-btn]");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const user = document.querySelector("[data-user]").value;
  const pass = document.querySelector("[data-pass]").value;
  if (user === "alura@gmail.com" && pass === "123") {
    window.location.href = "editproductos.html";
  } else {
    window.location.href = "error.html";
  }
});
