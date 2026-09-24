// ==========================================
// EJERCICIO 1: CALCULADORA DE DESCUENTOS
// ==========================================
function calcularPrecioFinal(precioBase, descuento = 10, envio = 3000) {
    const precioFinal = Math.round(precioBase - (precioBase * (descuento / 100)) + envio);
    return precioFinal;
}

let valor = calcularPrecioFinal(15000);
console.log(valor); // 16500

valor = calcularPrecioFinal(20000, 25, 0);
console.log(valor); // 15000


// ==========================================
// EJERCICIO 2: VALIDADOR DE CORREOS
// ==========================================
function validarCorreo(correo) {
    const correoModif = correo.trim().toLowerCase();

    return {
        correoLimpio: correoModif,
        esValido: correoModif.includes("@") && correoModif.endsWith(".com")
    };
}

const resultado = validarCorreo('   Ignacioverafe@gmail.com    ');
console.log(resultado);


// ==========================================
// EJERCICIO 3: GENERADOR DE SLUG
// ==========================================
function generarSlug(slug) {
    const slugLimpio = slug.toLowerCase().trim().replaceAll(" ", "-");
    return slugLimpio;
}

const slugWeb = generarSlug(' La pagina web se llama verits   ');
console.log(slugWeb); // "la-pagina-web-se-llama-verits"


// ==========================================
// EJERCICIO 4: FICHA DE PRODUCTO
// ==========================================
function generarFichaProducto(fichaa) {  
    return {
        codigo: "SKU-" + fichaa.id,
        tituloClean: fichaa.titulo.trim().toUpperCase(), 
        precioconIva: fichaa.precio + (fichaa.precio * 0.19),
        disponible: fichaa.stock > 0
    };
}

const ficha = { 
    id: 101,
    titulo: "  teclado rgb  ",
    precio: 35000,
    stock: 5
};

const ficha_usar = generarFichaProducto(ficha);
console.table(ficha_usar);


// ==========================================
// EJERCICIO 5: BUSCADOR EN ARREGLO
// ==========================================
function buscarProducto(arreglo, nombreBuscado) {
    return arreglo.find(function(producto) {
        return producto.nombre.toLowerCase() === nombreBuscado.toLowerCase();
    });
}

const inventario = [
  { nombre: "Monitor 24", precio: 120000 },
  { nombre: "Teclado Mecánico", precio: 45000 },
  { nombre: "Mouse Inalámbrico", precio: 20000 }
];

const testing = buscarProducto(inventario, "teclado mecánico");
console.log(testing);

// ==========================================
// BLOQUE 1: FUNCIONES Y PROCESAMIENTO
// ==========================================

// 1. Evaluador de nota
function evaluarNota(number = 4.0) {
    return number >= 4;
}
console.log(evaluarNota(6.5)); // true

// 2. Conversor de moneda
function convertirUSD(montoCLP, tasaCambio = 950) {
    return Math.round(montoCLP / tasaCambio);
}
console.log(`Le vamos a pagar $${convertirUSD(95000)} dólares`);

// 3. Formateador de nombre (Apellido, Nombre)
function formatearNombre(nombre, apellido) {
    const nomLimpio = nombre.trim();
    const nombreCap = nomLimpio[0].toUpperCase() + nomLimpio.slice(1).toLowerCase();
    return `${apellido.trim().toUpperCase()}, ${nombreCap}`;
}
console.log(formatearNombre("  ignacio ", "  vera  ")); // "VERA, Ignacio"

// 4. Validador de acceso
function validarAcceso(objeto) {
    return {
        usuario: objeto.nombre.toUpperCase(),
        esMayorDeEdad: objeto.edad >= 18,
        esTerceraEdad: objeto.edad >= 65
    };
}
console.log(validarAcceso({ nombre: "Carlos", edad: 17 }));

// 5. Contador de palabras
function contarPalabras(frase) {
    const limpiarFrase = frase.trim();
    const listaPalabras = limpiarFrase.split(" ").length;
    return {
        fraseLimpia: limpiarFrase,
        totalPalabras: listaPalabras
    };
}
console.log(contarPalabras("aqui cuantas palabras crees que hay"));


// ==========================================
// BLOQUE 2: REPASO INTEGRADOR
// ==========================================

// 7. Procesador de pedidos
const pedidos = [
  { id: 1, producto: "Teclado", precio: 30000, pagado: true },
  { id: 2, producto: "Mouse", precio: 15000, pagado: false },
  { id: 3, producto: "Monitor", precio: 150000, pagado: true },
  { id: 4, producto: "Audífonos", precio: 25000, pagado: false }
];

const pagados = pedidos.filter(p => p.pagado);
const montoTotal = pagados.reduce((acc, p) => acc + p.precio, 0);
const existeMayorCien = pedidos.some(p => p.precio > 100000);

console.log("Monto recaudado:", montoTotal); // 180000
console.log("¿Hay producto > 100k?:", existeMayorCien); // true

// 8. Transformación de catálogo
const catalogo = [
  { sku: "cpu-i7", descripcion: "  procesador intel i7  ", precioNeto: 200000 },
  { sku: "gpu-rtx", descripcion: "  tarjeta grafica rtx  ", precioNeto: 400000 }
];

const procesarCatalogo = catalogo.map(function(item) {
    const descLimpia = item.descripcion.trim();
    return {
        skuUpper: item.sku.toUpperCase(),
        detalle: descLimpia[0].toUpperCase() + descLimpia.slice(1),
        precioFinal: item.precioNeto * 1.19
    };
});
console.table(procesarCatalogo);

// 9. Búsqueda por ID
const usuariosBD = [
  { id: 101, username: "ivera", activo: true },
  { id: 102, username: "mrodriguez", activo: false },
  { id: 103, username: "jperez", activo: true }
];

function obtenerUsuarioPorId(usuarios, idBuscado) {
    return usuarios.find(u => u.id === idBuscado);
}
console.log(obtenerUsuarioPorId(usuariosBD, 101));

// 10. Fusión inmutable de objetos
const configBase = { tema: "oscuro", idioma: "es", notificaciones: true };
const configUsuario = { idioma: "en", notificaciones: false };

function combinarConfiguraciones(base, usuario) {
    return {
        ...base,
        ...usuario,
        fechaActualizacion: "2026-09-24"
    };
}
console.log(combinarConfiguraciones(configBase, configUsuario));