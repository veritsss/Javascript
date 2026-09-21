// Unir objetos (a veces es necesario unir objetos ya que la idea es no modificar los objetos)

//Aqui trabajamos a producto como un objeto, el cual en este caso incluye diferentes variables
const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

// estamos uniendo 2 objetos y los estamos agregando a otro llamado nuevo producto el cual contiene las propiedades de ambos objetos.
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);
