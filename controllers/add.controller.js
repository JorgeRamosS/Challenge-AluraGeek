import { clientServices } from "../app/client-services.js";

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const url = document.querySelector("[data-url]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  clientServices
    .crearItem(nombre, categoria, url, precio, descripcion)
    .then(() => {
      window.location.href = "./registrocompletado.html";
    })
    .catch((err) => console.log(err));
});
