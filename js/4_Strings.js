// String o cadenas de texto

const tweet = 'Aprendiendo Javascript con el curso de desarrollo web completo'; 
const producto2 = String('Monitor de 20"'); // Crear un string utilizando un constructor.
const producto3 = new String('Monitor de 50 pulgadas'); // queda como un tipo de dato objeto, es decir, tiene indices.

console.log(tweet);
console.log(producto2);
console.log(producto3);

//  .length() (es una propiedad ya que proviene de un . y no utiliza () )
console.log(tweet.length); //Nos permite saber cuantos caracteres tiene una variable

//  .indexOf() (retorna posición de un elemento) Muestra el indice
console.log(tweet.indexOf('Javascript')) // Nos permite saber en que posicion inicia un elemento 
console.log(tweet.indexOf('Tablet')) //retorna -1 ya que no existe

//  .includes() (retorna true o false) nos dice si se encuentra o no 
console.log(tweet.includes('Javascript')) //retorna True
console.log(tweet.includes('Tablet')) //retorna False ya que no existe

//                                AMBOS HACEN LO MISMO IDEAL USAR SLICE

//  .slice() Extrae el texto de un rango de indices en este caso parte en 0 y termina en el 3 porque el 4 no lo cuenta por lo que imprime Java
let texto = 'JavaScript';
let part = texto.slice(0,4)
console.log(part)

//  .substring() Extrae el texto de un rango de indices en este caso parte en 0 y termina en el 3 porque el 4 no lo cuenta por lo que imprime Java
const text = "JavaScript";
const fragmento = text.substring(0, 4);
console.log(fragmento); // "Java"

//  .toUpperCase() Convierte la variable texto a mayúsculas
texto = texto.toUpperCase();
console.log(texto);

//  .toLowerCase() Convierte la variable texto a minúsculas
texto = texto.toLowerCase();
console.log(texto);

//  .trim() Quita los espacios del comienzo y del final de un string
let text1 = "      Hello World!      ";
console.log(text1);

text1 = text1.trim();
console.log(text1);

// .replace()  Busca un valor en la cadena y lo reemplaza por otro. Ojo: Solo reemplaza la primera coincidencia que encuentra.
const frase = "Aprender Python es genial. Python es fácil.";
const nuevaFrase = frase.replace("Python", "JavaScript");

console.log(nuevaFrase); // "Aprender JavaScript es genial. Python es fácil."

// .replaceAll() Reemplaza todas las coincidencias del texto buscado en la cadena.
const frase2 = "Aprender Python es genial. Python es fácil.";
const nuevaFrase2 = frase2.replaceAll("Python", "JavaScript");
console.log(nuevaFrase2); // "Aprender JavaScript es genial. JavaScript es fácil."

// NO TAN NECESARIO SABER DE MEMORIA 

//  .padStart() Rellena la cadena al inicio con el carácter que le indiques hasta alcanzar la longitudTotal deseada.
const numeroMes = "9";
const mesFormateado = numeroMes.padStart(3, "0");
console.log(mesFormateado); // "009" (LONGITUD 3, caracteres de relleno '0')

//  .padEnd() Rellena la cadena al final con el carácter que le indiques hasta alcanzar la longitudTotal deseada.
const codigo = "ABC";
const codigoCompleto = codigo.padEnd(6, "-");
console.log(codigoCompleto); // "ABC---"

//  .repeat() Devuelve una nueva cadena con el texto original repetido el número de veces que le especifiques.
const palabra = "Hola! ";
console.log(palabra.repeat(3)); // "Hola! Hola! Hola! "
