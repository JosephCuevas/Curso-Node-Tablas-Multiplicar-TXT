
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');

require('colors');

// para limpiar la terminal
console.clear();

// compracion de argv

// este argv nos da un array donde se tiene que hacer uso de reccorer las posiciones
// console.log(process.argv);

//este argv hace uso de un objeto, los puedes invocar a basel nombre y es mas sencillo
// de utilizar ademas de poder manipular los argumentos desde cli con yargs
// console.log(argv);

// console.log('base: yargs', argv.base);


// esto esta bien pero se dbee de remplazar por lo que se hace con yargs y argv
// const [, , arg3 = 'base=4'] = process.argv;
// //para obtener la base
// const [, base=4] = arg3.split('=');

// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));