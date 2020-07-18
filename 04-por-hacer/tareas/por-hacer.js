const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar');
        console.log('Guardado con exito');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const listar = (descripcion) => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    // Simplificando
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });
}

const borrado = (descripcion) => {
    cargarDB();
    let listadoNuevo = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoNuevo.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = listadoNuevo;
        guardarDB();
        return true;
    }
}

// Mi version
// const borrado = (descripcion) => {
//     cargarDB();
//     let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
//     if (index >= 0) {
//         listadoPorHacer.splice(index, 1);
//         guardarDB();
//         return true;
//     } else {
//         return false;
//     }
// }

module.exports = {
    crear,
    listar,
    actualizar,
    borrado
}