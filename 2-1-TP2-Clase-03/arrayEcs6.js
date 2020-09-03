const inventors = [
   { first: "Albert", last: "Einstein", year: 1879 },
   { first: "Isaac", last: "Newton", year: 1643 },
   { first: "Galileo", last: "Galilei", year: 1564 },
   { first: "Marie", last: "Curie", year: 1867 },
   { first: "Johannes", last: "Kepler", year: 1571 },
   { first: "Nicolaus", last: "Copernicus", year: 1473 },
   { first: "Max", last: "Planck", year: 1858 },
];

function print(inventors) {
   console.log("Nombre\t\t\tApellido\t\tAño");
   console.log("-------------------------------------------------------");
   // Tres maneras de hacer las funciones:
   // (La que mas se usa es arrow)
   inventors.forEach((element) => {
      console.log(`${element.first.padEnd(12, " ")}\t\t${element.last.padEnd(12, " ")}\t\t${element.year}`);
   });

   console.log("-----");

   inventors.forEach(function (element) {
      console.log(`${element.first.padEnd(12, " ")}\t\t${element.last.padEnd(12, " ")}\t\t${element.year}`);
   });

   console.log("-----");

   inventors.forEach(iteracion);
}

function iteracion(element) {
   console.log(`${element.first.padEnd(12, " ")}\t\t${element.last.padEnd(12, " ")}\t\t${element.year}`);
}

// Llamo a la funcion
print(inventors);

// Ej 1
// Filtrar los inventores nacidos despues del año 1800

// Filter devuelve un array que cumpla la condicion
console.log();
console.log("Ej 1");
print(inventors.filter((element) => element.year > 1800 && element.year < 1870));

// Ej 2 (Mapeos)
// Convertir el apellido en mayusculas

// La funcion map itera y reemplaza por el valor que envio
console.log();
console.log("Ej 2");
print(
   inventors.map((element) => {
      return { first: element.first, last: element.last.toUpperCase(), year: element.year };
   })
);

// Ej 3
// Aplico ambas cosas, filter y mapeo
console.log();
console.log("Ej 3");
print(
   inventors
      .filter((element) => element.year > 1800 && element.year < 1870)
      .map((element) => ({
         first: element.first,
         last: element.last.toUpperCase(),
         year: element.year,
      }))
);

// Ej 4
// Buscar un objeto del array por un atributo
console.log();
console.log("Ej 4");

// El metodo find devuelve el primer elemento con la condicion expresada, en el caso que no
// encuentre nada, devuelve undefined
console.log(inventors.find((e) => e.last.toLowerCase() == "kepler"));

// Ej 5
// Buscar si alguno de los inventores nacio en 1858
console.log();
console.log("Ej 5");

// Devuelve un booleano si existe o no algun elemento que cumpla la condicion
console.log(inventors.some((i) => i.year === 1858));

// Ej 6
// Si todos los inventores nacieron despues del año 1500
// .every
console.log();
console.log("Ej 6");

console.log(inventors.every((i) => i.year > 1500));

// Ej 7
// Ordenar los inventores por fecha de nacimiento
// .sort
console.log();
console.log("Ej 7");

// Va intercambiando las posiciones si cumple la condicion
// en este caso de forma ascendente el año
print(
   inventors.sort((inv1, inv2) => {
      if (inv1.year > inv2.year) {
         return 1;
      } else {
         return -1;
      }
   })
);

// Ej 8
// Convertir el array a un formato:
//[{name: {first: 'first name',}}]
/**
 * [{name:
 *      {
 *          first: 'first name',
 *          last: 'last name'
 *      }
 * },
 * year: year
 * ]
 *
 */
console.log();
console.log("Ej 8");

function print2(inventors) {
   console.log("Nombre\t\t\tApellido\t\tAño");
   console.log("-------------------------------------------------------");
   inventors.forEach((element) => {
      console.log(`${element.name}\t\t${element.year}`);
   });
}

print2(
   inventors.map((element) => [
      {
         name: {
            first: element.first,
            last: element.last,
         },
         year: element.year,
      },
   ])
);

/* let toShow = [];

inventors.forEach((element) => {
   let objetc = {
      name: [element.first, element.last],
      year: element.year,
   };

   toShow.push(objetc);
});

console.log(toShow); */
