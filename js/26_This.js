
// This
const reservacion = {
    nombre : "Ignacio",
    edad : 25,
    resumen : function(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}
reservacion.resumen()


const reservacion2 = {
    nombre : "Krishna",
    edad : 25,
    resumen : function(){
        console.log(`Mi nombre es ${reservacion2.nombre} y tengo ${reservacion2.edad} años`)
    }
}
reservacion2.resumen()