const argv = require('./config/yargs').argv;
const porHacer = require('./tareas/por-hacer');
const colors = require('colors');
//const argv = require('yargs').argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        //console.log('Crear por hacer');
        break;
    case 'listar':
        let listado = porHacer.listar(argv.descripcion);

        for (let actividad of listado) {
            console.log('===== Por Hacer ====='.green);
            console.log(actividad.descripcion);
            console.log('Estado:', actividad.completado);
            console.log('====================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrado(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}