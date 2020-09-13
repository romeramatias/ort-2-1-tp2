// Inicializar el proyecto con 'npm init' en consola
// Crea un archivo .json que guarda detalles del proyecto y las dependencias

// Para instalar dependencias 'npm i "nombredelmodulo"'

// Problema de seguridad Powershell
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

const validator = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail('romeramatias0@gmail.com'));
console.log(validator.isEmail('romeramatias.com'));

console.log(chalk.blue('Hola'));
console.log(chalk.red('Hola'));
console.log(chalk.green('Hola'));