//                            Ejericicios variables


// Ejercicio 1.1: Declara una variable mutable llamada edad con tu edad actual usando let. Modifica su valor en la línea siguiente sumándole 1 año.
let edad = 25;
edad = edad + 1;
console.log(edad)

//Ejercicio 1.2: Declara una constante PAIS con el nombre de tu país usando const. Intenta reasignarle otro valor en la siguiente línea y observa qué error te devuelve la consola.
/*
const pais = 'Chile';
pais = 'Perú'; //Uncaught TypeError: Assignment to constant variable.
*/


//Ejercicio 1.3: Declara tres variables en una sola línea (let a = 1, b = 2, c = 3;) e imprime su suma por consola.

let a = 1, b = 2, c = 3;
console.log(a + b + c);



//                 Ejercicios strings 

// Ejercicio 1: Dada la variable
const frase = "   JavaScript es un lenguaje genial   ";
console.log(frase);

// Elimina los espacios al inicio y al final usando .trim().
const fraseNoespacios = frase.trim();
console.log(fraseNoespacios);

// Convierte el resultado completo a mayúsculas.
const fraseMayus = fraseNoespacios.toUpperCase();
console.log(fraseMayus);

// Reemplaza la palabra "GENIAL" por "PODEROSO".
const reemplazarPalabra = fraseMayus.replace('GENIAL','PODEROSO');
console.log(reemplazarPalabra);


//Ejercicio 2: Dada la cadena
const email = "usuario@correo.com";

// Verifica si el correo incluye el símbolo @ usando .includes().
const verificarEmail = email.includes('@');
console.log(verificarEmail);

// Obtén solo el nombre de usuario (lo que está antes del @) utilizando .slice() e .indexOf().
const indiceArroba = email.indexOf('@');
console.log(indiceArroba);

const todoAntes = email.slice(0, indiceArroba);
console.log(todoAntes);


//                       Concatenación y Template Strings


/* Ejercicio 4.1: Aplica la jerarquía de operadores para resolver el siguiente caso en código:
Calcula el promedio de tres notas (7, 5, 9) e imprime el resultado. Asegúrate de usar paréntesis para que la división no se ejecute antes que la suma.*/
const notas = {
    nota1: 7,
    nota2: 5,
    nota3: 9
};
const promedio = (notas.nota1 + notas.nota2 + notas.nota3) / 3;
console.log(promedio);

/* Ejercicio 4.2: Dado un número entero let contador = 10;, incrementa su valor en 5 usando el operador de asignación compuesta (+=), luego divídelo entre 3 (/=) 
e imprime el valor final. */
let contador = 10;
contador += 5;
contador /= 3;
console.log(contador);

//                        MATH


// Ejercicio 5.1: Genera un número entero aleatorio entre 1 y 10 usando Math.random(), Math.floor() (o Math.round()).
const valorRandomEntero = Math.floor(Math.random() * 10) + 1;
console.log(valorRandomEntero);



// Ejercicio 5.2: Dados los números [-15, 20, 3.5, 99, -2], usa Math.max() y Math.min() junto con el operador spread (...) para encontrar el valor máximo y el mínimo del grupo.
const numeros = [-15, 20, 3.5, 99, -2]
const numeroMax = Math.max(...numeros); // ... Desempaqueta el array, es decir, extrae los valores de la lista
const numeroMin = Math.min(...numeros); // ... Desempaqueta el array, es decir, extrae los valores de la lista
console.log( `el valor maximo de la lista es: ${numeroMax} y el minimo: ${numeroMin}`);



// Ejercicio 5.3: Dado el número 4.7, aplica Math.floor(), Math.ceil() y Math.round() sobre él e imprime las diferencias.
const numero = 4.7;
piso = Math.floor(numero);
cielo =  Math.ceil(numero);
prom = Math.round(numero);
console.log(`el resultado del redondeo al piso es: ${piso}, el del redondeo hacia arriba es ${cielo} y el del redondeo normal es  ${prom}`);

//                           BOOLEANS


// Ejercicio 6.1: Declara dos variables: const limite = 18; y const edadUsuario = 20;.
const limite = 18;
const edadUsuario = 20;
// Crea una variable boolean esMayorDeEdad que evalúe si edadUsuario es mayor o igual a limite.
const esMayorDeEdad = edadUsuario >= limite;

// Imprime el resultado y su tipo de dato usando typeof.
console.log(esMayorDeEdad, typeof esMayorDeEdad );


//Ejercicio 6.2: Evalúa y predice el resultado en consola de las siguientes expresiones antes de ejecutarlas:
/*
console.log(10 == "10"); true
console.log(10 === "10"); false
console.log(Boolean("")); 
console.log(Boolean("Hola"));            */