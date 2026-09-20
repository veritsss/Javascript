// Objetos
const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

//Aqui trabajamos a producto como un objeto, el cual en este caso incluye diferentes variables
const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);
console.log(producto.precio); // accedemos a una propiedad de un objeto, en este caso nos mostrará en la consola el valor de precio
console.log(producto["precio"]); // es lo mismo que la anterior pero menos usada
