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

//Agregar valores a un arreglo

numeros[5] = 60; // Esta opción no es muy utilizada debio a que se complica en arreglos mas grandes

numeros.push(60, 70, 80); //Agrega valores al final del arreglo (no es necesario saber cuanto mide el arreglo)

numeros.unshift(-10, -20, -30); //Agrega valores al inicio del arreglo

console.table(numeros);

//Eliminar valores de un arreglo

meses.pop(); // Elimina el ultimo valor de un arreglo

meses.shift(); // Elimina el primer valor de un arreglo


meses.splice(3, 0, 'Abril'); // Insertamos 'Abril' en la posición 3, el 0 quiere decir que no eliminamos nada.

meses.splice(2, 1); // Elimina un valor en especifico, el primer valor (2) es el indice del elemento que se quiere eliminar y el segundo valor (1) es cuantos elementos incluyendo a ese se deben eliminar

console.table(meses);

// Rest operator o Spread operator (se agregan elementos pero a diferencia de los anteriores aca se crea un nuevo arreglo, no se modifica el original)

const nuevoArreglo = [...meses, "Junio"];

// const nuevoArreglo = ["Junio", ...meses];  hace lo mismo que el anterior pero agrega el elemento al comienzo
