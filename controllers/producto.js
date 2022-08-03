import { clientServices } from "../app/client-services.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");

const obtenerProducto = async (id) => {
  try {
    const arrProducto = await clientServices.leerProducto(id);
    crearTarjeta(arrProducto);
  } catch (error) {
    console.log(error);
  }
};

const crearTarjeta = ({ nombre, categoria, url, precio, descripcion }) => {
  const imgTag = document.querySelector(".detalle__img");
  const categoriaTag = document.querySelector(".detalle__categoria");
  const nombreTag = document.querySelector(".detalle__nombre");
  const precioTag = document.querySelector(".detalle__precio");
  const descripcionTag = document.querySelector(".detalle__descripcion");
  imgTag.src = url;
  categoriaTag.textContent = `Categoría: ${categoria}`;
  nombreTag.textContent = nombre;
  precioTag.textContent = `${precio}`;
  descripcionTag.textContent = descripcion;
};

obtenerProducto(id);
