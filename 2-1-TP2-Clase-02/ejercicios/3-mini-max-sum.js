let arr = [1,3,5,7,9];
console.log(arr);

const sumaMinima = (array) => {
    ordenar(array);
    let ordenado = array.slice(0,4);
    return sumar(ordenado);  
}

const sumaMaxima = (array) => {
    ordenar(array);
    let ordenado = array.slice(array.length-4 , array.length);
    return sumar(ordenado);
}

const sumar = (array) => {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma += array[index]; 
    }
    return suma;
}

const ordenar = (array) => array.sort((a, b) => a - b);

console.log(sumaMinima(arr));
console.log(sumaMaxima(arr));