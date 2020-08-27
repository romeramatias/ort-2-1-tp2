const catsAndMouse = (gat1, gat2, rat) => {
    let dist1 = rat - gat1;
    let dist2 = rat - gat2;
    
    if (dist1 > dist2) {
        return 'Cat A';
    } else if (dist1 === dist2){
        return 'Rat';
    } else {
        return 'Cat B';
    };
};

console.log(catsAndMouse(1, 2, 3));
console.log(catsAndMouse(4, 4, 3));
console.log(catsAndMouse(10, 1, 3));
console.log(catsAndMouse(2, 5, 3));
