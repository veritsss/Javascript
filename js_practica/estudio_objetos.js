// ==========================================
// 1. CREACIÓN Y ACCESO A PROPIEDADES
// ==========================================

/* 
Ejercicio 1.1: Crea un objeto producto que represente un artículo de e-commerce 
con las propiedades: nombre ("Monitor Gamer"), precio (250000), disponible (true) y marca ("ASUS").
1. Imprime el nombre en mayúsculas usando la notación de punto (.) y .toUpperCase().
2. Imprime el precio usando la notación de corchetes (['precio']).
*/

const producto = {
    nombre: "Monitor Gamer",
    precio: 250000,
    disponible: true,
    marca: "ASUS"
};

// 1. Acceso con punto (.)
console.log(producto.nombre.toUpperCase());

// 2. Acceso con corchetes ([])
console.log(producto["precio"]);


// ==========================================
// 2. MODIFICACIÓN Y MÉTODOS DE OBJETOS
// ==========================================

/* 
Ejercicio 2.1: Modifica el objeto producto anterior:
1. Agrega una nueva propiedad llamada descuento con el valor 15 (15%).
2. Actualiza el valor de disponible a false.
3. Elimina la propiedad marca usando el operador delete.
*/

producto.descuento = 15;
producto.disponible = false;
delete producto.marca;

console.log(producto);


/* 
Ejercicio 2.2: Aplica Object.freeze() sobre un objeto usuario = { id: 101, username: "Admin" }. 
Intenta modificar la propiedad username en la línea siguiente e imprime el objeto para verificar que no cambió.
*/

const usuario = {
    id: 101,
    username: "Admin"
};

Object.freeze(usuario);

// Intento de modificación (no surgirá efecto gracias a Object.freeze)
usuario.username = "cliente";

console.log(usuario);


/* 
Ejercicio 2.3: Dado el objeto const cliente = { nombre: "Ana", saldo: 5000, ciudad: "Santiago" };:
1. Obtén un arreglo con todas las llaves usando Object.keys().
2. Obtén un arreglo con todos los valores usando Object.values().
3. Obtén los pares clave-valor usando Object.entries().
*/

const cliente = { 
    nombre: "Ana",
    saldo: 5000,
    ciudad: "Santiago" 
};

const llaves = Object.keys(cliente);
console.log(llaves);

const valores = Object.values(cliente);
console.log(valores);

// Agregado: Par clave-valor
const entradas = Object.entries(cliente);
console.log(entradas);


// ==========================================
// 3. DESTRUCTURING Y OBJECT LITERAL ENHANCEMENT
// ==========================================

/* 
Ejercicio 3.1: Aplica Destructuring al objeto cliente para extraer nombre y saldo en variables 
independientes en una sola línea. Imprime un mensaje por consola formateado con Template Strings.
*/

const { nombre, saldo } = cliente;
console.log(`La clienta ${nombre} tiene un saldo disponible de $${saldo}`);


/* 
Ejercicio 3.2: Dadas las variables sueltas:
const titulo = "Curso JS";
const horas = 20;
Crea un objeto curso utilizando la sintaxis mejorada de objetos de ES6 (Object Literal Enhancement).
*/

const titulo = "Curso JS";
const horas = 20;

// En ES6, si la clave y la variable tienen el mismo nombre, no hace falta poner titulo: titulo
const curso = {
    titulo,
    horas
};

console.log(curso);


// ==========================================
// 4. MÉTODOS DENTRO DE OBJETOS Y "THIS"  (NO LO HABIA PODIDO HACER)
// ==========================================

/* 
Ejercicio 4.1: Crea un objeto cuentaBancaria con titular ("Ignacio"), saldo (1000) y dos métodos:
1. depositar(monto): Aumenta el saldo actual.
2. resumen(): Retorna un string formateado usando this.
*/

const cuentaBancaria = {
    titular: "Ignacio",
    saldo: 1000,
    
    depositar(monto) {
        this.saldo += monto;
    },

    resumen() {
        return `Titular: ${this.titular.toUpperCase()} | Saldo actual: $${this.saldo}`;
    }
};

console.log(cuentaBancaria.resumen());
cuentaBancaria.depositar(500);
console.log(cuentaBancaria.resumen());


// ==========================================
// 5. RETO MEZCLADO (OBJETOS + MATH + STRINGS + BOOLEANS)
// ==========================================

/* 
Ejercicio 5.1: Dado el objeto pedido:
const pedido = { id: 42, cliente: "   carlos mendoza   ", monto: 89.65, pagado: true };
Genera un nuevo objeto pedidoProcesado con:
1. folio: id a 6 dígitos con padStart.
2. clienteFormat: nombre sin espacios laterales (.trim()).
3. montoRedondeado: monto redondeado con Math.round().
4. esValido: boolean que evalúe si pagado === true y el montoRedondeado > 0.
*/

const pedido = {
    id: 42,
    cliente: "   carlos mendoza   ",
    monto: 89.65,
    pagado: true
};

const pedidoProcesado = { ...pedido };

pedidoProcesado.id = pedidoProcesado.id.toString().padStart(6, '0');
pedidoProcesado.cliente = pedidoProcesado.cliente.trim();
pedidoProcesado.monto = Math.round(pedidoProcesado.monto);
pedidoProcesado.esValido = pedidoProcesado.pagado === true && pedidoProcesado.monto > 0;

console.log(pedidoProcesado);