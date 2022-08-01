const busqueda = document.querySelector(".buscar");

const buscarProducto = () => {
  if (busqueda.value) {
    window.location.href = `busqueda.html?busqueda=${busqueda.value}`;
  }
};

busqueda.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    buscarProducto();
  }
});
