// ==========================================
// 1. CREACIÓN, ACCESO Y PROPIEDADES DE ARRAYS
// ==========================================

/* 
Ejercicio 1.1: Crea un arreglo llamado tecnologias con los siguientes valores: 
"HTML", "CSS", "JavaScript", "React", "Node.js".
1. Imprime el primer elemento y el último elemento utilizando el índice y la propiedad .length.
2. Imprime la cantidad total de elementos que contiene el arreglo.
*/

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
console.table(tecnologias);
console.log(tecnologias.length); // Largo 5

// Nota: Usar tecnologias.length - 1 hace que el acceso al último elemento sea dinámico
console.log(`La primera tecnología es ${tecnologias[0]} y la última es ${tecnologias[tecnologias.length - 1]}`);


// ==========================================
// 2. MÉTODOS DE MODIFICACIÓN (MUTACIÓN DE ARRAYS)
// ==========================================

/* 
Ejercicio 2.1: Dado el arreglo de frutas const frutas = ["Manzana", "Banana", "Naranja"];:
1. Agrega "Uva" al final usando .push().
2. Agrega "Frutilla" al inicio usando .unshift().
3. Elimina el último elemento usando .pop() e imprime qué elemento eliminaste.
4. Elimina el primer elemento usando .shift().
*/

const frutas = ["Manzana", "Banana", "Naranja"];

frutas.push('Uva');
frutas.unshift('Frutilla');

// .pop() elimina y retorna el último elemento eliminado ("Uva")
console.log(frutas.pop()); 

// Agregado: .shift() para eliminar el primer elemento ("Frutilla")
frutas.shift();
console.log(frutas);


/* 
Ejercicio 2.2 (.splice()): Dado el arreglo const meses = ["Enero", "Febrero", "Marzo", "Mayo", "Junio"];:
1. Usa .splice() para insertar "Abril" en la posición correcta (índice 3) sin eliminar ningún elemento.
2. Usa .splice() para eliminar "Mayo" de la lista.
*/

const meses = ["Enero", "Febrero", "Marzo", "Mayo", "Junio"];
meses.splice(3, 0, 'Abril'); // Insertamos 'Abril' en la posición 3
meses.splice(4, 1);          // Eliminamos 'Mayo'
console.log(meses);


// ==========================================
// 3. OPERADOR SPREAD (...) E INMUTABILIDAD
// ==========================================

/* 
Ejercicio 3.1: Combina listaA y listaB en listaCompleta usando el Operador Spread (...) 
y agrega "queso" al final.
*/

const listaA = ["Leche", "Pan"];
const listaB = ["Huevos", "Café"];

const listaCompleta = [...listaA, ...listaB, 'queso'];
console.log(listaCompleta);


// ==========================================
// 4. MÉTODOS MODERNOS DE BÚSQUEDA Y RECORRIDO
// ==========================================

/* 
Ejercicio 4.1 (.includes() e .indexOf()):
1. Comprueba si "Verde" existe en colores.
2. Encuentra la posición del color "Azul".
*/

const colores = ["Rojo", "Verde", "Azul", "Amarillo"];
const resultadoColores = colores.includes('Verde');
console.log(resultadoColores); // true

console.log(colores.indexOf('Azul')); // Índice 2


/* 
Ejercicio 4.2 (.forEach()):
Imprime cada precio del arreglo precios con el formato: "Precio: $100".
*/

const precios = [100, 250, 500, 1200];

// Nota: .forEach no necesita 'return', solo ejecuta la acción por cada iteración
precios.forEach(function(precio) {
    console.log(`Precio: $${precio}`);
});


// ==========================================
// 5. MÉTODOS ITERATIVOS QUE RETORNAN DATOS
// ==========================================

/* 
Ejercicio 5.1 (.map()): Dado el arreglo const numeros = [2, 4, 6, 8, 10];:
Crea un nuevo arreglo numerosAlCuadrado elevando cada número al cuadrado.
(Este ejercicio te faltó por probar, aquí tienes la solución)
*/

const numeros = [2, 4, 6, 8, 10];
const numerosAlCuadrado = numeros.map(function(num) {
    return num ** 2; // O num * num
});
console.log(numerosAlCuadrado); // [4, 16, 36, 64, 100]


/* 
Ejercicio 5.2 (.filter()): Obtén solo los números mayores o iguales a 18.
*/

const edades = [12, 18, 25, 15, 30, 8, 40];

const mayorEdad = edades.filter(function(edad) {
    return edad >= 18;
});
console.log(mayorEdad);


/* 
Ejercicio 5.3 (.reduce()): Calcula la suma total de las ventas.
*/

const ventas = [15.5, 20.0, 5.25, 10.0];

// Recomendado: Pasar un valor inicial (0) como segundo argumento en reduce
const resultadoVentas = ventas.reduce(function(total, venta) {
    return total + venta;
}, 0);
console.log(resultadoVentas); // 50.75


/* 
Ejercicio 5.4 (.find() y .some()):
1. Obtén el objeto cuyo nombre sea "Mouse".
2. Verifica si hay algún producto con precio mayor a 30000.
*/

const carrito = [
    { nombre: "Teclado", precio: 25000 },
    { nombre: "Mouse", precio: 12000 },
    { nombre: "Audífonos", precio: 35000 }
];

const resultadoFind = carrito.find(function(producto) {
    return producto.nombre === "Mouse";
});
console.log(resultadoFind);

const mayor30mil = carrito.some(function(producto) {
    return producto.precio > 30000;
});
console.log(mayor30mil); // true


// ==========================================
// 6. RETO MEZCLADO (ARRAYS + OBJETOS + STRINGS + MATH)
// ==========================================

/* 
Ejercicio 6.1: Dado un arreglo de estudiantes con notas:
Genera un nuevo arreglo estudiantesProcesados usando .map() transformando el nombre (.trim().toUpperCase()), 
redondeando la nota y evaluando si aprobó (nota >= 4.0).
(Este ejercicio te faltó por probar, aquí tienes la solución)
*/

const estudiantes = [
    { nombre: "  juan perez  ", nota: 5.8 },
    { nombre: "  maria gomez  ", nota: 6.5 },
    { nombre: "  pedro soto  ", nota: 3.2 }
];

const estudiantesProcesados = estudiantes.map(function(estudiante) {
    return {
        nombreFormat: estudiante.nombre.trim().toUpperCase(),
        notaRedondeada: Math.round(estudiante.nota),
        aprobado: estudiante.nota >= 4.0
    };
});

console.log(estudiantesProcesados);