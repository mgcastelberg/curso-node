// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// console.log(sumar(10, 20));

// function saludar() {
//     return 'Hola Mundo';
// }
// console.log(saludar());

// let saludar = () => 'Hola Mundo';
// console.log(saludar());

// let saludar = (nombre) => `Hola ${nombre}`;
// console.log(saludar('Manuel'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wingston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellido} - Poder: ${ this.poder }`;
    }
}

console.log(deadpool.getNombre());