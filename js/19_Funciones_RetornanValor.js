function sumar(n1, n2) {
  return n1 + n2; // en lugar de hacer un console y mostrar el resultado, lo que hace es retornar el resultado
}

const resultado = sumar(2, 3); // Se guarda el resultado en una variable

console.log(resultado);

let total = 0; // se crea una variable total que vale 0 y que se puede ir modificando

function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log(
  `el total a pagar incluyendo impuestos es de $${totalAPagar} pesos `);
