// ==========================================
// EJERCICIO 1: LIMPIEZA E IDENTIFICACIÓN
// ==========================================

const inventario = ["Monitor", "Teclado", "", "Mouse", "Teclado", "Audífonos", "  ", "Monitor Gamer"];

// 1. Filtrar cadenas vacías o con puros espacios
const inventarioLimpio = inventario.filter(function(item) {
    return item.trim() !== "";
});
console.table(inventarioLimpio);

// 2. Comprobar existencia en arreglo limpio
console.log(inventarioLimpio.includes("Mouse")); // true

// 3. Obtener índice exacto
console.log(inventarioLimpio.indexOf("Audífonos")); // 4 en limpio (5 en original)


// ==========================================
// EJERCICIO 2: CARRITO DE COMPRAS
// ==========================================

const carrito = [
  { id: 10, producto: "Teclado Mecánico", precio: 45000, envioGratis: true },
  { id: 11, producto: "Mousepad XL", precio: 15000, envioGratis: false },
  { id: 12, producto: "Monitor 24", precio: 120000, envioGratis: true },
  { id: 13, producto: "Cable HDMI", precio: 8000, envioGratis: false }
];

// 1. Filtrar solo productos con envío gratis
const envioGratis = carrito.filter(function(item) {
    return item.envioGratis === true;
});
console.log(envioGratis);

// 2. Suma total de precios
const costoTotal = carrito.reduce(function(total, precio) {
    return total + precio.precio;
}, 0);
console.log(costoTotal); // 188000

// 3. Verificar si algún precio es < 10000
const verify = carrito.some(function(prod) {
    return prod.precio < 10000;
});
console.log(verify); // true


// ==========================================
// EJERCICIO 3: TRANSFORMACIÓN DE USUARIOS
// ==========================================

const usuariosRegistrados = [
  { id: 1, nombre: "  juan carlos ", edad: 17 },
  { id: 2, nombre: "maria fernanda  ", edad: 22 },
  { id: 3, nombre: "  pedro pablo ", edad: 15 },
  { id: 4, nombre: "ana sofia ", edad: 28 }
];

const usuariosProcesados = usuariosRegistrados.map(function(valores) {
    return {
        id: valores.id,
        nombre: valores.nombre.trim().toUpperCase(),
        edad: valores.edad,
        esMayor: valores.edad >= 18
    };
});
console.table(usuariosProcesados);


// ==========================================
// EJERCICIO 4: STOCK Y PRECIOS
// ==========================================

const productos = [
  { SKU: "MEM-8GB", stock: 12, precio: 32000 },
  { SKU: "SSD-512GB", stock: 0, precio: 48000 },
  { SKU: "GPU-RX6600", stock: 4, precio: 260000 },
  { SKU: "FUENTE-650W", stock: 0, precio: 55000 }
];

// 1. Primer producto sin stock
const extraer = productos.find(function(elem) {
    return elem.stock === 0;
});
console.log(extraer);

// 2. Aplicar 10% de incremento con redondeo
const arrayModif = productos.map(function(arreglar) {
    return {
        SKU: arreglar.SKU,
        stock: arreglar.stock,
        precioIncrementado: Math.round(arreglar.precio * 1.10)
    };
});
console.table(arrayModif);


// ==========================================
// EJERCICIO 5: COMBINACIÓN Y FORMATEO
// ==========================================

const categoriasPrincipales = ["Electrónica", "Computación"];
const categoriasSecundarias = ["Accesorios", "Gamer"];

// 1. Combinar arreglos inmutablemente
const todasLasCategorias = [...categoriasPrincipales, ...categoriasSecundarias, 'Ofertas'];
console.table(todasLasCategorias);

// 2. Formatear cada elemento con Template String
const nuevoArreglo = todasLasCategorias.map(function(recorrer) {
    return `Categoría: ${recorrer.toUpperCase()}`;
});
console.table(nuevoArreglo);