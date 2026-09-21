const puntaje = 1000;

if (puntaje === 1000) {
  console.log("Si, el puntaje es 1000");
} else {
  console.log("No es igual a 1000");
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
  console.log("El usuario puede pagar");
} else {
  console.log("El usuario no tienen el dinero suficiente para pagar");
}

const rol = "editor";

if (rol === "administrador") {
  console.log("Usted tiene acceso TOTAL al sistema");
} else if (rol === "editor") {
  console.log("Usted tiene acceso parcial al sistema");
} else {
  console.log("Usted no tiene acceso al sistema");
}
