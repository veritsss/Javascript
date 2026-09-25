
//OBJECT LITERAL
const producto = {
    id : 1,
    nombre : "pan",
    precio : 2000
}
console.log(producto)

// OBJECT CONSTRUCTOR
function Productos(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;

}
Productos.prototype.formatearProducto = function() {
    return ` El producto: ${this.nombre} tiene un precio de: ${this.precio}`
}


const producto1 = new Productos(1, "pan", 2000);
const producto2 = new Productos(2, "leche", 3000);
const producto3 = new Productos(3, "huevos", 5000);


console.log(producto2.formatearProducto());