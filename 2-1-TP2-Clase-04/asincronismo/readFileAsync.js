const fs = require('fs');
const path = './archivoGrande.txt';

// Sincrona, hasta que no termina de leer el archivo no va a pasar de esa linea
// Asincrona sigue la ejecucion

fs.readFile(path, 'utf8', (error, datos) => {
    if(!error){
        console.log(datos);
    } else {
        console.log(error.message);
    }
});

console.log('Esperando lectura...');
