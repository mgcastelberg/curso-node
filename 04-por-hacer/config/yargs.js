const { boolean } = require('yargs');

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    type: boolean,
    descripcion: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

//Se sintetiso en la parte de arriba
// const argv = require('yargs')
//     .command('crear', 'Crear un elemento por hacer', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripcion de la tarea por hacer'
//         }
//     })
//     .command('actualizar', 'Actualiza el estado completado de una tarea', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripcion de la tarea por hacer'
//         },
//         completado: {
//             default: true,
//             alias: 'c',
//             descripcion: 'Marca como comppletado o pendiente la tarea'
//         }
//     })
//     .command('borrar', 'Borra una tarea', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             descripcion: 'Descripcion de una tarea borrada'
//         }
//     })
//     .help()
//     .argv;