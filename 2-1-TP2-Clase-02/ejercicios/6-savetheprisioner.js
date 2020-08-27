const savePrisioner = (cantPrisioneros, cantGolosinas, numInicial) => {
    let sillaActual = numInicial;
    let ultimo = 0;

    while (cantGolosinas > 0) {
        // El prisionero come
        cantGolosinas--;    
        sillaActual++;

        if (sillaActual > cantPrisioneros) {
            sillaActual = 1;
        }

        if(cantGolosinas === 1){
            ultimo = sillaActual;
        }
    }

    return ultimo;
}

console.log(savePrisioner(5,2,1));
console.log(savePrisioner(7,19,2));
console.log(savePrisioner(3,7,3));
console.log(savePrisioner(15,16,14));