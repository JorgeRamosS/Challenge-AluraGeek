const listaItems = () =>
  fetch("https://fake-alura-api.herokuapp.com/products").then((respuesta) =>
    respuesta.json()
  );

const crearItem = (nombre, categoria, url, precio, descripcion) => {
  return fetch("https://fake-alura-api.herokuapp.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuid.v4(),
      nombre,
      categoria,
      url,
      precio,
      descripcion,
    }),
  });
};

const eliminarItem = (id) => {
  return fetch(`https://fake-alura-api.herokuapp.com/products/${id}`, {
    method: "DELETE",
  });
};

const detalleItem = (id) => {
  return fetch(`https://fake-alura-api.herokuapp.com/products/${id}`).then(
    (respuesta) => respuesta.json()
  );
};

const actualizarItems = (id, nombre, categoria, url, precio, descripcion) => {
  return fetch(`https://fake-alura-api.herokuapp.com/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, nombre, categoria, url, precio, descripcion }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

const leerProductos = () =>
  fetch("https://fake-alura-api.herokuapp.com/products").then((response) =>
    response.json()
  );

const leerProducto = (id) =>
  fetch(`https://fake-alura-api.herokuapp.com/products/${id}`).then((response) =>
    response.json()
  );

export const clientServices = {
  listaItems,
  crearItem,
  eliminarItem,
  detalleItem,
  actualizarItems,
  leerProductos,
  leerProducto,
};
