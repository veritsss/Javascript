// ==========================================
// 1. DECLARACIÓN VS. EXPRESIÓN DE FUNCIONES
// ==========================================

/* 
Ejercicio 1.1:
1. Crea saludar() con Function Declaration e invócala antes de definirla (Hoisting).
2. Crea despedir() con Function Expression e invócala antes de definirla.
*/

// Function Declaration: Funciona por el HOISTING (JavaScript mueve la declaración al inicio)
saludar('Ignacio');

function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

// Function Expression: Si la llamas antes de definirla dará un error (ReferenceError/Cannot access 'despedida' before initialization)
const despedida = function(nombre) {
    console.log(`Chao, ${nombre}!`);
};

despedida('Ignacio');


// ==========================================
// 2. DIFERENCIA ENTRE MÉTODO Y FUNCIÓN
// ==========================================

/* 
Ejercicio 2.1 (Completado para tus apuntes):
- Función: Es independiente.
- Método: Es una función que vive DENTRO de un objeto.
*/

// Función independiente
function sumar(a, b) {
    console.log(a + b);
}
sumar(5, 3); // Se llama directamente

// Método dentro de un objeto
const calculadora = {
    marca: "Casio",
    multiplicar: function(a, b) {
        return a * b;
    }
};
console.log(calculadora.multiplicar(4, 2)); // Se llama a través del objeto (objeto.método)


// ==========================================
// 3. PARÁMETROS, ARGUMENTOS Y VALORES POR DEFECTO
// ==========================================

/* 
Ejercicio 3.1:
Crea calcularTotal con valores por defecto (impuesto = 19, descuento = 0).
*/

function calcularTotal(precio, impuesto = 19, descuento = 0) {
    // Cálculo aplicado: precio + IVA - descuento
    const total = precio + (precio * (impuesto / 100)) - descuento;
    return total;
}

console.log(calcularTotal(3000)); // Usa el impuesto por defecto (19%) y descuento (0)
console.log(calcularTotal(3000, 10, 500)); // Pasa argumentos personalizados


// ==========================================
// 4. FUNCIONES QUE RETORNAN VALORES (RETURN)
// ==========================================

/* 
Ejercicio 4.1:
Retorna texto sin espacios laterales y en mayúsculas.
*/

function formatearTexto(texto) {
    return texto.trim().toUpperCase();
}

// Tu observación fue 10/10: Cuando una función usa 'return', asignamos la llamada a una variable para guardar el resultado.
const textoLimpio = formatearTexto('   Hola, este es mi texto NO formateado, soy ignacio vera y estoy practicando desarrollo    ');
console.log(textoLimpio);


/* 
Ejercicio 4.2:
Retorna true si el número es par usando módulo %.
*/

function esPar(numero) {
    return numero % 2 === 0;
}

let resultadoNumero = esPar(3);
console.log(resultadoNumero); // false

resultadoNumero = esPar(2);
console.log(resultadoNumero); // true


// ==========================================
// 5. RETO INTEGRADOR (RECIBIR UN OBJETO Y RETORNAR OTRO)
// ==========================================

/* 
Ejercicio 5.1:
La función debe recibir el objeto como parámetro (no crearlo adentro) y retornar un nuevo objeto procesado.
*/

// Así se ajusta para que sea dinámica y procese CUALQUIER usuario que le pases:
function procesarUsuario(usuario) {
    return {
        nombreFormat: usuario.nombre.trim().toUpperCase(),
        edad: usuario.edad,
        puedeVotar: usuario.edad >= 18
    };
}

// Objeto de prueba:
const usuarioPrueba = {
    nombre: "  pedro ",
    edad: 20
};

const usuarioProcesado = procesarUsuario(usuarioPrueba);
console.log(usuarioProcesado);