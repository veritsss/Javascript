// Funciones

//Declaración  de Función (funciona el codigo si llamo a la funcion antes o después)
function sumar() {
  console.log(10 + 10);
}

// Se llama a la función
sumar();

// Expresión de la función (funciona el codigo sólo si llamo a la función después de haberla escrito)
const sumar2 = function () {
  console.log(3 + 3);
};

sumar2();

// IIFE  (son funciones que no es necesario llamarlas, se mandan a llamar solas, sirve para que una variable no pueda ser llamada en otro archivo distinto al que está)
(function () {
  console.log("Esto es una función");
})();
