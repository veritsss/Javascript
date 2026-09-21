// SWITCH
// Los switch hacen algo parecido a los if pero convienen cuando hay multiples casos.

const metodoPago = "tarjeta";

switch (metodoPago) {
  case "tarjeta":
    console.log("pagaste con tarjeta");
    break; // un switch siempre debe de finalizar con un break

  case "cheque":
    console.log("pagaste con cheque");
    break; // un switch siempre debe de finalizar con un break

  case "efectivo":
    console.log("pagaste con efectivo");
    break; // un switch siempre debe de finalizar con un break

  default: // hay que especificar el valor default en un switch
    console.log("aun no has pagado");
    break;
}
