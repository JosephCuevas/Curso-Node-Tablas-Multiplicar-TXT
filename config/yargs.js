// yargs
const argv = require('yargs')
    .options(
        'b', {
        alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de a tabla de multitiplicar'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra o lista la tabla de multiplicar realizada'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Esel numero que define hasta que numero debe continuar la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;