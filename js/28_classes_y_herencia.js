// ==========================================
// POO: CLASES Y HERENCIA (SINTAXIS MODERNA ES6)
// ==========================================

// 1. Clase Padre (Base)
class Producto {
    constructor(id, nombre, precio) { 
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto: ${this.nombre} tiene un precio de: $${this.precio}`;
    }

    retornarPrecio() {
        return this.precio;
    }
}

const producto1 = new Producto(1, "Pan", 2000);
const producto2 = new Producto(2, "Leche", 3000);


// 2. Clase Hija (Hereda de Producto mediante 'extends')
class Libro extends Producto {
    constructor(id, nombre, autor, precio, isbn) {
        // 'super' llama al constructor de la clase padre (Producto)
        super(id, nombre, precio); 
        this.autor = autor;
        this.isbn = isbn;
    }

    // Sobrescribimos el método heredado utilizando 'super.metodo()'
    formatearProducto() {
        return `${super.formatearProducto()} | Autor: ${this.autor} | ISBN: ${this.isbn}`;
    }
}

const libro1 = new Libro(1, "El Principito", "Antoine de Saint-Exupéry", 12000, "978-0156013987");

console.log(producto2.formatearProducto()); 
// "El producto: Leche tiene un precio de: $3000"

console.log(libro1.formatearProducto()); 
// "El producto: El Principito tiene un precio de: $12000 | Autor: Antoine de Saint-Exupéry | ISBN: 978-0156013987"