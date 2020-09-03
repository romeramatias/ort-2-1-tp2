const fs = require('fs');

const path = './inventors.json';

let datos = fs.readFileSync(path, 'utf8');

// Para leer archivo Json
datos = JSON.parse(datos)

console.log(datos);

// Ejercicio
// Dado un archivo Json, añadir un nuevo inventor y grabarlo en el mismo archivo

const inventorNuevo = {
    first: "Matias",
    last: "Romera",
    year: 1996
}

// Agrego al array de inventors el nuevo
datos.inventors.push(inventorNuevo);

console.log(datos);

// Convierto a Json
datos = JSON.stringify(datos);

console.log('Stringify:');
console.log(datos, null, " ");

// path para que escriba sobre el mismo, y datos lo que va a escribir
// pisa todo el archivo o lo crea
// PISA
fs.writeFileSync(path, datos);

// CREA
// Creando un archivo que no existe
const path2 = "./inventors2.json";
fs.writeFileSync(path2, datos);