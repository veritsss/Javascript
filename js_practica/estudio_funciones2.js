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