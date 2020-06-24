const opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'Crea en un archivo con la tabla de multiplicar', opc)
    .help()
    .argv;

module.exports = {
    argv
}