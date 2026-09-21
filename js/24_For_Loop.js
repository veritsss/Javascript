// For Loop

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`el numero ${i} es par`);
  } else {
    console.log(`el numero ${i} es impar`);
  }
}

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

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}

// While Loop (a diferencia del do while se evalua la funcion y luego se compila por lo que si la funcion no cumple las condiciones no se imprime nada)

let i = 0; // Indice

while (i < 10) { // Condicion
    if(i % 2 === 0){
        console.log(`el numero ${i} es par`)
    } else{
        console.log(`el numero ${i} es impar`)
    }
    
    i++; // Incremento
}


// Do while Loop (a diferencia del while, el codigo se ejecuta y luego evalua la funcion, por ello se muestra en consola 100, ya que el valor no cumplke la condicion)

let j = 100;
do{
    console.log(j);
    j++;
} while(j < 10);
