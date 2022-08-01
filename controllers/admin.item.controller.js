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
            <a href="#" class="link__color">Ver Producto</a>
            <div class="descripcion__acciones">
                <button class="descipcion__acciones-edit" id="${id}">
                  <a href="editaritems.html?id=${id}">
                    <i class="bx bxs-pencil" style="color: #0030ff"></i>
                  </a>
                </button>
                <button class="descipcion__acciones-borrar" id="${id}">
                    <i class="bx bxs-trash" style="color: #ff0004"></i>
                </button>
             </div>
        </div>
      </div>       
    `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector(".descipcion__acciones-borrar");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientServices
      .eliminarItem(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrio un error"));
  });
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
