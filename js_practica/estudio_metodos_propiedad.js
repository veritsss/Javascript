// ==========================================
// BLOQUE 1: MÉTODOS DE PROPIEDAD Y ARROW FUNCTIONS BÁSICAS
// ==========================================

// 1. Reproductor con métodos (sintaxis tradicional y corta)
const reproductorAudio = {
    reproducir: function(cancion) {
        return `Sonando: ${cancion}`;
    },
    pausar() {
        return "Música pausada";
    },
    cambiarVolumen(nivel) {
        return `Volumen ajustado a ${nivel}%`;
    }
};
console.log(reproductorAudio.reproducir("La pregunta - J. Álvarez"));
console.log(reproductorAudio.pausar());

// 2. Evaluaciones simples con Arrow Functions
const esPar = (numero) => numero % 2 === 0;
console.log(esPar(2501)); // false

const calcularIva = precio => precio * 0.19;
console.log(calcularIva(5000)); // 950

const unirNombres = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(unirNombres("Ignacio", "Vera")); // "Ignacio Vera"

// 3. Objeto con métodos expresados como Arrow Functions
const convertidor = {
    clpToUsd: (montoCLP) => montoCLP / 950,
    limpiarTexto: (texto) => texto.trim().toUpperCase()
};
console.log(convertidor.clpToUsd(9500)); // 10
console.log(convertidor.limpiarTexto("  Limpia este texto pOrfa mi BRO  "));


// ==========================================
// BLOQUE 2: PROCESAMIENTO DE COLECCIONES Y REFACTORIZACIÓN
// ==========================================

// 4. Filtrado y transformación rápida en arreglos
const productos = [
  { nombre: "teclado rgb", precio: 30000 },
  { nombre: "mousePad xl", precio: 12000 },
  { nombre: "monitor 27", precio: 180000 }
];

const filtrarProductos = (dato) => dato.filter(valor => valor.precio < 50000);
console.table(filtrarProductos(productos));

// Retorno implícito directo sin asignación de variables innecesarias
const nombresMayus = (producto) => producto.map(valor => valor.nombre.toUpperCase());
console.table(nombresMayus(productos));

// 5. Calculadora Financiera (Sintaxis corta de métodos de ES6)
const calculadora = {
    calcularIva(monto) {
        return monto + (monto * 0.19);
    },
    aplicarDescuento(monto, porcentaje) {
        return monto - (monto * (porcentaje / 100));
    },
    calcularCuotas(monto, cuotas) {
        return Math.round(monto / cuotas);
    }
};
console.log(calculadora.calcularIva(2000));
console.log(calculadora.aplicarDescuento(5000, 0));
console.log(`Usted debe pagar un total de ${calculadora.calcularCuotas(5000, 2)}`);

// 6. Retorno implícito de objetos ({ ... }) y Property Shorthand (id: id -> id)
const crearUsuario = (id, username) => ({
    id,
    username: username.trim().toLowerCase(),
    activo: true
});
console.log(crearUsuario("101", "veritss"));


// ==========================================
// BLOQUE 3: MÉTODOS DE ARREGLOS AVANZADOS
// ==========================================

const preciosNetos = [1000, 5000, 12000, 3000, 25000];

// Comparación: Versión tradicional vs Arrow Function
function calcularPrecios(precio) {
    const precioFiltrado = precio.filter(function(valor) {
        return valor >= 5000;
    });
    const guardarIva = precioFiltrado.map(function(datos) {
        return Math.round(datos * 1.19);
    });
    return guardarIva;
}
console.log(calcularPrecios(preciosNetos));

const calcularPreciosFlecha = (precio) => {
    const precioFiltrado = precio.filter(valor => valor >= 5000);
    const guardarIva = precioFiltrado.map(datos => Math.round(datos * 1.19));
    return guardarIva;
};
console.log(calcularPreciosFlecha(preciosNetos));

// 7. Objeto gestor de inventario con Arrow Functions integradas
const inventario = [
  { id: 1, nombre: "  teclado  ", stock: 15 },
  { id: 2, nombre: "  mouse  ", stock: 0 },
  { id: 3, nombre: "  monitor  ", stock: 8 }
];

const gestionInventario = {
    obtenerDisponibles: lista => lista.filter(cantidad => cantidad.stock > 0),
    formatearNombres: lista => lista.map(dato => dato.nombre.trim().toUpperCase())
};
console.table(gestionInventario.obtenerDisponibles(inventario));
console.table(gestionInventario.formatearNombres(inventario));

// 8. Desestructuración de objetos directamente en parámetros ({ perfil })
const clientes = [
  { id: 101, nombre: "Ignacio", perfil: { rol: "admin" } },
  { id: 102, nombre: "Carlos", perfil: { rol: "user" } },
  { id: 103, nombre: "Ana", perfil: { rol: "admin" } }
];

const perfilFiltro = (filtro) => filtro.filter(({ perfil }) => perfil.rol === "admin");
console.table(perfilFiltro(clientes));

// 9. Búsqueda directa con .find() y condiciones compuestas
const contactos = [
  { nombre: "Juan", email: "juan.sin.arroba.com" },
  { nombre: "Pedro", email: "pedro@empresa.cl" },
  { nombre: "Maria", email: "maria@gmail.com" }
];

const buscarPrimerEmailValido = (elementos) => 
    elementos.find(correo => correo.email.includes("@") && correo.email.endsWith(".cl"));

console.table(buscarPrimerEmailValido(contactos));