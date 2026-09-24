// ==========================================
// BLOQUE 1: ESTRUCTURAS CONDICIONALES (IF / ELSE / SWITCH)
// ==========================================

// 1. Evaluador de Crédito con retornos tempranos
const evaluarCredito = (montoSueldo, tieneDicom) => {
    if (tieneDicom) {
        return "Rechazado: Registro comercial activo";
    }
    
    if (montoSueldo >= 1200000) {
        return "Aprobado: Crédito Premium";
    } else if (montoSueldo >= 600000) {
        return "Aprobado: Crédito Estándar";
    } else {
        return "Rechazado: Renta insuficiente";
    }
};

console.log(evaluarCredito(1100000, false)); // Aprobado: Crédito Estándar
console.log(evaluarCredito(1500000, true));  // Rechazado: Registro comercial activo

// 2. Evaluador de Pagos y Descuentos
const calcularDescuentoPago = (monto, metodoPago) => {
    const mpagoLimpio = metodoPago.trim().toLowerCase();

    if (mpagoLimpio === "efectivo") {
        return monto * 0.85;
    } else if (mpagoLimpio === "transferencia") {
        return monto * 0.90;
    } else if (mpagoLimpio === "tarjeta") {
        return monto;
    } else {
        return "Método de pago no válido";
    }
};

console.log(calcularDescuentoPago(10000, "efectivo")); // 8500

// 3. Switch con agrupación de casos y limpieza de inputs
const obtenerTiempoEntrega = (region) => {
    switch (region.trim().toLowerCase()) {
        case "metropolitana": {
            return "Entrega en 24 horas";
        }
        case "valparaiso":
        case "coquimbo": {
            return "Entrega en 48 horas";
        }
        case "magallanes":
        case "aysen": {
            return "Entrega en 5 días hábiles";
        }
        default: {
            return "Entrega en 3 a 5 días hábiles";
        }
    }
};

console.log(obtenerTiempoEntrega("valparaiso")); // Entrega en 48 horas

// 4. Switch para comandos de sistema
const ejecutarComando = (comando) => {
    const comandoLimpio = comando.trim().toLowerCase();

    switch (comandoLimpio) {
        case "start":
        case "iniciar": {
            return "Sistema iniciado";
        }
        case "stop":
        case "detener": {
            return "Sistema detenido";
        }
        case "pause": {
            return "Sistema en pausa";
        }
        case "status": {
            return "Sistema Operativo";
        }
        default: {
            return "Comando no reconocido";
        }
    }
};

console.log(ejecutarComando("pause")); // Sistema en pausa


// ==========================================
// BLOQUE 2: BUCLES MANUALES (FOR, WHILE, BÚSQUEDAS)
// ==========================================

// 5. Búsqueda de Fraude en arreglo con For
const transacciones = [1200, 4500, -500, 1800, -12000, 3000];

const detectarPrimerFraude = (monto) => {
    for (let i = 0; i < monto.length; i++) {
        if (monto[i] <= -10000) {
            console.log(`¡Alerta! Fraude detectado en el índice ${i}`);
            return i; // Retorna el índice inmediatamente
        }
    }
    return -1; // Se ejecuta SOLO si termina el bucle sin encontrar coincidencias
};

console.log(detectarPrimerFraude(transacciones)); // Índice 4

// 6. Búsqueda de índice por umbral
const puntajes = [15, 22, 8, 45, 90, 12, 60];

const obtenerIndicePuntajeAlto = (puntaje) => {
    for (let i = 0; i < puntaje.length; i++) {
        if (puntaje[i] >= 50) {
            return i; // Retorna el índice (4) donde está el 90
        }
    }
    return -1; // Retorno de respaldo fuera del bucle
};

console.log(obtenerIndicePuntajeAlto(puntajes)); // 4

// 7. Generador de Paginación con While
const generarPaginacion = (totalPaginas) => {
    const paginas = [];
    let i = 1;

    while (i <= totalPaginas) {
        paginas.push(`Página: ${i}`);
        i++; // Incremento crucial para evitar bucle infinito
    }

    return paginas; // Retorno del arreglo acumulado fuera del bucle
};

console.log(generarPaginacion(5));

// 8. Simulación de Ahorro con While y retorno de objeto
const simularAhorro = (metaDinero, aporteMensual) => {
    let ahorroActual = 0;
    let meses = 0;

    while (ahorroActual < metaDinero) {
        ahorroActual += aporteMensual;
        meses++;
    }

    return {
        meses,
        ahorroActual
    };
};

console.log(simularAhorro(100000, 15000)); // { meses: 7, ahorroActual: 105000 }