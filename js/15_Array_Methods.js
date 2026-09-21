// Array Methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

//forEach (es como un ciclo for en python)
meses.forEach(function (mes) {
  console.log(mes);
});

meses.forEach(function (mes) {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

//Includes funciona cuando es un objeto plano como este pero cuando es dinámico como el carrito no es la mejor opción
let resultado = meses.includes("Marzo");
console.log(resultado);

// Some ideal para arreglo de objetos
resultado = carrito.some(function (producto) {
  return producto.nombre == "Celular";
});

// Reduce (sirve para en este caso saber cuanto es el total a pagar si sumamos todos los precios de los productos del carrito)
resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

//Filter (es una especie de filtro where en base de datos)
resultado = carrito.filter(function (producto) {
  return producto.precio > 400;
});

console.log(resultado);
