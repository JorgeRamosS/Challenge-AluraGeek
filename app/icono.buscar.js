const bx = document.querySelector(".bx");
bx.addEventListener("click", () => {
  const buscar = document.querySelector(".buscarEstilo");
  const logo = document.querySelector(".logo");
  logo.classList.toggle("ocultar");
  buscar.classList.toggle("mostrar");
});
