// tabla de multiplicar de un numero
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base=5, listar=false, hasta=10) => {
    try {
        
        let salida, consola = '';
        
        for (let i = 1; i <= hasta; i++){
            salida += `${base} * ${i} = ${base * i} \n`;
            consola += `${base} ${'*'.cyan} ${i} = ${base * i} \n`;
        }
        
        if (listar == true) {
            console.log('Tabla de: ', base);
            console.log(consola);
        }


        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log(`tabla-${base}.txt creado`);
        // })


        // fs.writefilesync
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            return `tabla-${base}.txt creada`;
    } catch (err) {
        throw err;
    }
}

// de este modo se exporta la funcion y se puede usar desde otros archivos
module.exports = {
    crearArchivo
}