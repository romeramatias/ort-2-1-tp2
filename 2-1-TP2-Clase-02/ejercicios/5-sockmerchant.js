let medias = [10, 20, 20, 20, 20, 30, 50, 10, 20];

const metodoMedias = (array) => {
    // saco el 20, busco otro 20 y los saco a los dos
    // cuento
};

function sockMerchant(medias) {
    let socks = {};
    let cont = 0;
    for (let m of medias) {
        socks[m] = socks[m] + 1 || 1;
        
        if (socks[m] % 2 === 0) {
            cont += 1;
        }
    }
    console.log(socks);
    return cont;
}

console.log(sockMerchant(medias));
