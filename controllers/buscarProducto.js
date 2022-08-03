import { clientServices } from "../app/client-services.js";

const url = new URL(window.location);
const busqueda = url.searchParams.get("busqueda");

const titulo = document.querySelector(".resultado__titulo");
const productos = document.querySelector(".productos");

titulo.textContent = `Resultados de la busqueda: "${busqueda}"`;

const obtenerProductos = async (busqueda) => {
  try {
    const arrProducts = await clientServices.leerProductos();
    productos.innerHTML = "";
    buscarProductos(arrProducts, busqueda);
  } catch (error) {
    console.log(error);
  }
};

const buscarProductos = (arrProducts, busqueda) => {
  let coincidencia = 0;
  arrProducts.forEach((product) => {
    const nombre = product.nombre.toLowerCase();
    const categoria = product.categoria.toLowerCase();
    const regex = busqueda.toLowerCase();
    if (nombre.includes(regex) || categoria.includes(regex)) {
      mostrarProducto(product);
      coincidencia++;
    }
  });
  if (coincidencia == 0) {
    noCoincidencia();
  }
};

const mostrarProducto = (product) => {
  const item = crearItem(product);
  productos.appendChild(item);
};

const crearItem = (product) => {
  const item = document.createElement("a");
  item.classList.add("link");
  item.href = `detalleprod.html?id=${product.id}`;
  item.innerHTML = crearContenidoItem(product);
  return item;
};

const crearContenidoItem = ({ nombre, categoria, url, precio, id }) => {
  return `
    <div class="item">
      <img src="${url}" alt="item1" class="imagen"/>
      <div class="descripcion">
        <p>${nombre}</p>
        <p>${categoria}</p>
        <p class="precio">${precio}</p>
        <a href="./detalleprod.html?id=${id}" class="link__color">
          Ver Producto
        </a>
      </div>
    </div>
  `;
};

const noCoincidencia = () => {
  productos.innerHTML = `<div class="no-coincidencia">
                                <p>No se encontró ningún resultado que coincida con la búsqueda.</p>
                             </div>`;
};

obtenerProductos(busqueda);
