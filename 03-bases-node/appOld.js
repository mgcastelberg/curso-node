//REQUIRE
// const fs = require('fs');

const { bakeArchivo } = require('./multiplicar/multiplicar');
//let base = 1;

// let datos = "";

// for (let i = 1; i <= 10; i++) {
//     // console.log(base * i);
//     //console.log(`${base} * ${i} = ${ base * i}`);
//     datos += `${base} * ${i} = ${ base * i}\n`;
// }

// const data = new Uint8Array(Buffer.from(datos));

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });

// console.log(module);
// console.log(process);
// console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];

let base = parametro.split('=')[1];
console.log(base);

bakeArchivo(base)
    .then((archivo) => {
        console.log(`Archivo creado ${archivo}`);
    }).catch((err) => {
        console.log(err);
    });