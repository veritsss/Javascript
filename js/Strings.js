// String o cadenas de texto

const tweet = 'Aprendiendo Javascript con el curso de desarrollo web completo'; 
const producto2 = String('Monitor de 20"');
const producto3 = new String('Monitor de 50 pulgadas'); // queda como un tipo de dato objeto

console.log(tweet);
console.log(producto2);
console.log(producto3);

//length
console.log(tweet.length); //Nos permite saber cuantos caracteres tiene una variable

// IndexOf (retorna posición)
console.log(tweet.indexOf('Javascript')) // Nos permite saber en que posicion inicia un elemento 
console.log(tweet.indexOf('Tablet')) //retorna -1 ya que no existe


//includes (retorna true o false)
console.log(tweet.includes('Javascript')) //retorna True
console.log(tweet.includes('Tablet')) //retorna False ya que no existe