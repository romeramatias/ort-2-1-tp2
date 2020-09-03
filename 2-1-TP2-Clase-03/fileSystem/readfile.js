const fs = require('fs');
//import fs from 'fs'
// fs es el fileSystem

const path = './hola.txt';
// Por defecto es Asincro, aca abajo estamos especificando que es Sincro
// Como es sincro, esta asegurado que dps de esta linea de codigo, ya termina de leer el archivo
let data = fs.readFileSync(path, 'utf-8');

console.log(data);

data += '\nwasaaaaaaaaa 😱😱😱😱😱😱';

fs.writeFileSync(path, data);

console.log(data);
