// 1. Crea un arreglo de objetos con AL MENOS 5 productos, 
//    cada uno con las propiedades  nombre, precio y categoria

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// 2. Usa filter() para obtener los productos que cuesten menos de $100
const menos_cien = productos.filter(producto => producto.precio < 100);

console.log("Los productos que valen menos de 100 pesos son: ", menos_cien);
console.log("****************");

// 3. Usa sort() para ordenar esos productos alfabeticamente por su nombre
const productos_ordenados = menos_cien.sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
    return 0;
});

console.log("Los productos ordenados son los siguientes: ", productos_ordenados);
console.log("****************");

// 4. Usa map() para generar un nuevo arreglo que contenga solo los nombre de los productos
const solo_nombres = productos_ordenados.map(producto => producto.nombre);

console.log(solo_nombres);
console.log("****************");

// Metodos opcionales

// 5. Usar reduce() para sumar todos los precios de los productos que valen menos de 100
const suma_menos_cien = menos_cien.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("La suma de los productos es:", suma_menos_cien);
