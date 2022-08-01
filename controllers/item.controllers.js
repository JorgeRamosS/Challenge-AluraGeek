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

const div = document.querySelector(".productos");

clientServices
  .listaItems()
  .then((data) => {
    data.forEach(({ url, nombre, precio, id }) => {
      const nuevoItem = nuevoProducto(url, nombre, precio, id);
      div.appendChild(nuevoItem);
    });
  })
  .catch((error) => alert("Ocurrio un error"));
