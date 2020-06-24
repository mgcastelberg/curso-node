//REQUIRE
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { bakeArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo listado`))
            .catch(e => console.log(e))

        break;
    case 'crear':
        console.log('Crear');
        bakeArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado`.yellow + ` ${archivo}`.green))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(module);
// console.log(process);
// console.log(process.argv);
// console.log(argv);
// console.log('Base: ', argv.base);
// console.log('Limite: ', argv.limite);