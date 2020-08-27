// declaracion e inicializacion de arrays
let nombres = ['Juan', 'Pedro', 'Maria', 'Eduardo'];

let primerNombre = nombres[0];

let ultimoNombre = nombres[nombres.length - 1];

// itearar en un Array
console.log('Itearar con for');
for (let i = 0; i < nombres.length; i++) {
    const element = nombres[i];
    console.log(element);
}

// iterar un arrar con for
for (const nombre of nombres) {
    if(nombre === 'Pedro'){
        //continue;
        break;
    }
    console.log(nombre);
    //nombres.push()
};

// for in solo usar para iterar propiedades de objetos, no para arrays
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }

// agregar elemento al final de un array
nombres.push('Elena');

// sacar del final
let ultimo = nombres.pop();

// scar del principio
let primer = nombres.shift();

// agregar al principio
nombres.unshift('Anna');

let posicion = nombres.indexOf('Elena');

// remover elementos 
nombres.splice(2, 1);

// arrays son objetos, por tanto van por referencia

let nombresNuevo = nombres.slice();


nombres.sort();
console.log(nombres);

let numeros = [1,5,7,100,2];
numeros.sort();
console.log(numeros);

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  // Generar un array a partir de una string, se usa split
  let stringNombres = "Juan,Pedro,María,Julian";
  let arrNombres = stringNombres.split(',');

  // Volver a unir
  stringNombres = arrNombres.join(';');

  console.log(stringNombres);

  // Ejercicio
  // Dado un array de numeros enteros, postivos, determinar el segundo mas mayor

  let nums = [3,4,6,6,5,5];

  // Output 5

  // TDD (Test Driver Developmen)

  function segundoMayor(array){
      return array.sort()[array.length - 2]; 
  }

  console.log(segundoMayor([1,2,3,4,5]) === 4);
  console.log(segundoMayor([3,4,6,6,5,5])=== 5);
  console.log(segundoMayor([100,20,35,4,5])=== 35);
  console.log(segundoMayor([0,0,0,0,0])=== 0);
 // console.log(segundoMayor([1,2,3,4,5])=== 4);

 console.log(segundoMayor([1,2,3,4,5]));






