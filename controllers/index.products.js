import { clientServices } from "../app/client-services.js";

const nuevoProducto = (url, nombre, precio, id) => {
  const linea = document.createElement("a");
  linea.classList.add("link");
  const contenido = `
      <div class="item">
        <img src="${url}" alt="item1" />
        <div class="descripcion">
          <p>${nombre}</p>
          <p class="precio">${precio}</p>
          <a href="./detalleprod.html?id=${id}" class="link__color">
            Ver Producto
          </a>
        </div>
      </div>
    `;
  linea.innerHTML = contenido;
  return linea;
};

const div = document.querySelector("[data-sw]");
const divb = document.querySelector("[data-consolas]");
const divc = document.querySelector("[data-diversos]");

clientServices
  .listaItems()
  .then((data) => {
    data.forEach(({ url, nombre, categoria, precio, id }) => {
      if (categoria == "Star Wars") {
        const nuevoItem = nuevoProducto(url, nombre, precio, id);
        div.appendChild(nuevoItem);
      }
      if (categoria == "Consolas") {
        const nuevoItem = nuevoProducto(url, nombre, precio, id);
        divb.appendChild(nuevoItem);
      }
      if (categoria == "Diversos") {
        const nuevoItem = nuevoProducto(url, nombre, precio, id);
        divc.appendChild(nuevoItem);
      }
    });
  })
  .catch((error) => alert("Ocurrio un error"));
