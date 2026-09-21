// Objetos
// Si bien cuando utilizamos la funcion const un objeto si se puede modificar, a diferencia de las funciones. Cuando aplicamos un object freeze logramos que no se pueda modificar.

//corre JS en modo estricto, es decir, utiliza las buenas prácticas de javascript, para que en caso de que cometamos un error la consola lo pueda mostrar.
"use strict";

//Aqui trabajamos a producto como un objeto, el cual en este caso incluye diferentes variables
const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//congela el objeto, lo que hace que no pueda ser modificado
Object.freeze(producto); // freeze no permite modificar,agregar o eliminar.
Object.seal(producto); // seal si permite modificar propiedades existentes pero no agregar ni modificar.

//tratamos de agregar una nueva propiedad al objeto producto
//producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));

// la propiedad que intentamos agregar no se agregó debido a que utilizamos object freeze
console.log(producto);
