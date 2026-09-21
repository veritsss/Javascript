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

// Sólo se pueden utilizar en arreglos y se ejecutan una vez por cada elemento del arreglo


// forEach (si solo quiero leer los elementos de un arreglo y mostrarlos en pantalla)

carrito.forEach(function(producto){
    console.log(producto.nombre)
})


// Map (se utiliza si quiero crear un nuevo arreglo)
const nuevoArreglo = carrito.map(producto => producto.nombre);
console.log(nuevoArreglo);