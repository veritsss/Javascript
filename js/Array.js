// Array o arreglo
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

console.table(meses);

const arreglo = ["Hola", 10, true];

console.table(arreglo);

// Acceder a los valores de un arreglo
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//conocer la extension de un arreglo
console.log(meses.length);

// Recorrer el carrito
numeros.forEach(function (numero) {
  console.log(numero);
});
