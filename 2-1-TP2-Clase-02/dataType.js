// ES6 existen 6 primitivos y object
// las mas importantes Number, String, Boolean, Null, Undefined, Object

// Javascript es un lenguaje dinamico

// NUMBER
let var1 = 1;
let var2 = 0;
let var3 = -0;

console.log("1 / 0 = " + var1 / var2);
console.log("Raiz cuadrada (-1) " + Math.sqrt(-1));
console.log("tipo de var3 " + typeof(var3));

// STRING
let saludo1 = 'Hola mundo "infectado" ';
let saludo2 = "Hola mundo \"En comillas\" ";
let caracter = 'c';
let pizza = '🍕';

console.log(saludo1 + 'quiero una ' + pizza);
// backtick, comilla francesa `
console.log(`${saludo2}`);
console.log(`${saludo1} quiero una ${pizza}`);

// Null, Undefined
// Null representa la ausencia de algun valor
let nulo = 45;
nulo = null;
console.log(nulo);

let nodefinido;
console.log(nodefinido);

// Conversiones implicitas o Coercion 

let someNumber = 45;
let someString = 'Ten';
let someBoolean = false;

// Ejercio
// probar 'sumar' un numero con un string a que tipo es convertido
// probar 'sumar' un booleano a un string
// probar 'sumar' un booleano a un numero

let sumaNumeroyString = someNumber + someString;
let sumaBooleanoyString = someBoolean + someString;
let sumaBooleanoyNumero = someBoolean + someNumber;

console.log(`Suma de numero y string: ${sumaNumeroyString} y es del tipo ${typeof(sumaNumeroyString)}`);
console.log(`Suma de Booleano y string: ${sumaBooleanoyString} y es del tipo ${typeof(sumaBooleanoyString)}`);
console.log(`Suma de Booleano y numero: ${sumaBooleanoyNumero} y es del tipo ${typeof(sumaBooleanoyNumero)}`);

// Parseo de numeros
let cadenaNumero = '34';
console.log(parseInt(cadenaNumero) + 1);

let cadenaFloat = '34.5';
console.log(parseFloat(cadenaFloat) + 5.4);

let numeroCadena = 45.4;
console.log(numeroCadena.toString());

// declaración de objetos

let actor = {
    name: 'Juan Perez',
    age: 56
}

//imprimir el objeto
console.log('El objeto actor:', actor);

// notacion de corchetes []
console.log(`La propiedad 'name': ${actor['name']} `);
// notacion punto objeto.propiedad
console.log(`La propiedad 'name': ${actor.name} `);

// antes del ECS6 var

var mivariable = 45;

// a partir de ECS6+ let

let x = 1;
let y = 5;
if (x === 1) {
    let x = 2; 
    console.log(x);
    y = 56;
}
console.log(x);

//let x = 10;

// la buena practica es usar let siempre, ya no se usa var

const key = 'abc123';
//key = 'asdfasd';

const person = {
    name: 'Pablo',
    age: 34
};

person.name = 'Juan';

const actor1 = Object.freeze(person);

person.name = 'Julian';

console.log(actor1);

// se debe declarar las variables por defecto como const
















