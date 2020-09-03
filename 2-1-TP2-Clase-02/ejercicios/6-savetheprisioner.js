const savePrisioner = (cantPrisioneros, cantGolosinas, numInicial) => {
    let sillaActual = numInicial;
    let ultimo = 1;

    while (cantGolosinas > 1) {
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

console.log(savePrisioner(1,1,1) === 1);
console.log(savePrisioner(5,2,1) === 2);
console.log(savePrisioner(5,2,2) === 3);
console.log(savePrisioner(3,7,3) === 3);
console.log(savePrisioner(7,19,2) === 6);
console.log(savePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(savePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(savePrisioner(353972922, 573651462, 244520504) === 110226121);