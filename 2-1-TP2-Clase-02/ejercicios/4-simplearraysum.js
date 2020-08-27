let arr = [1,2,3];

suma = array => {
    let sum = 0;
    for (let i = 0 ; i < array.length ; i++){
        sum += array[i];
    }
    return sum;
} 

console.log(suma(arr));