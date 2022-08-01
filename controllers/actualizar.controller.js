import { clientServices } from "../app/client-services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
  const urlb = new URL(window.location);
  const id = urlb.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]");
  const categoria = document.querySelector("[data-categoria]");
  const url = document.querySelector("[data-url]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");

  clientServices.detalleItem(id).then((products) => {
    nombre.value = products.nombre;
    categoria.value = products.categoria;
    url.value = products.url;
    precio.value = products.precio;
    descripcion.value = products.descripcion;
  });
};

obtenerInformacion();

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const urlb = new URL(window.location);
  const id = urlb.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const url = document.querySelector("[data-url]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  clientServices
    .actualizarItems(id, nombre, categoria, url, precio, descripcion)
    .then(() => {
      window.location.href = "./productoeditado.html";
    });
});
