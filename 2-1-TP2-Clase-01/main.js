import fs from 'fs'

const data = fs.readFileSync('./hola.txt', 'utf-8');

console.log(data);