//REQUIRE
const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base} no es un número`);
            return; //para que no continue con el script
        }

        console.log('======================'.green);
        console.log(` Tabla de ${base} hasta ${limite}`.red);
        console.log('======================'.green);

        let datos = "";

        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base * i}\n`;
        }
        console.log(datos);
    });
}


// module.exports.bakeArchivo = (base) => {
let bakeArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base} no es un número`);
            return; //para que no continue con el script
        }

        let datos = "";

        for (let i = 1; i <= limite; i++) {
            // console.log(base * i);
            //console.log(`${base} * ${i} = ${ base * i}`);
            datos += `${base} * ${i} = ${ base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(datos));

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = {
    bakeArchivo,
    listarTabla
}