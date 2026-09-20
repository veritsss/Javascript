// Objetos

//Aqui trabajamos a producto como un objeto, el cual en este caso incluye diferentes variables
const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Forma anterior
const precioProducto = producto.precio;
console.log(precioProducto);

//Destructuring
// Una ventaja es que se pueden hacer varios en una misma linea como es en este caso donde se desestructura precio, disponible y nombreProducto
const { precio, disponible, nombreProducto } = producto; // extrae el valor y crea la variable, todo en solo un paso, es lo mismo que la forma anterior pero mas moderno
console.log(precio);
console.log(disponible);
console.log(nombreProducto);
