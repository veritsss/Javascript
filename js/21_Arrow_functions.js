// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = (tecnologia) => {
  console.log(`aprendiendo ${tecnologia}`); // Las llaves son opcionales cuando hay sólo una linea de codigo, como lo es el caso de anterior
};

aprendiendo("Javascript");

//En la pagina 16 están utilizando funciones normales.

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

meses.forEach((mes) => {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

// Some
resultado = carrito.some((producto) => producto.nombre == "Celular");

console.log(resultado);

// Reduce (sirve para en este caso saber cuanto es el total a pagar si sumamos todos los precios de los productos del carrito)
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);

//Filter (es una especie de filtro where en base de datos)
resultado = carrito.filter((producto) => producto.precio > 400);

console.log(resultado);
