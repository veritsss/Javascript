// Funciones como parametros y argumentos

// numero1 y 2 son parametros
// parametros por default, en caso de que uno de los parametros no exista se le asigna el valor '0'
function sumar(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
}

sumar(10, 10); // Argumentos o valores reales
sumar(1, 2);
sumar(45, 7);
sumar(1); // para estos casos sirve darle el valor 0 default a los parametros

// Expresión de la función (funciona el codigo sólo si llamo a la función después de haberla escrito)
const sumar2 = function (n1, n2) {
  console.log(n1 + n2);
};

sumar2(5, 10);
