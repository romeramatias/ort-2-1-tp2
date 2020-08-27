let numeral = "";
let returnEscalera = (numero) => {
    for (let index = 1; index <= numero; index++) {
        let numEspacios = numero - index;
        let espacio = " ";
        for (let index = 0; index < numEspacios; index++) {
            numeral += espacio;
        }
        numeral += "#";
        console.log(numeral);
        numeral = "";
    }
};

const returnEscalera2 = (n) => {
        let filledArray = new Array(n).fill(' ');
        while (filledArray.indexOf(' ') !== -1) {
            filledArray.shift();
            filledArray.push('#');
            console.log(filledArray.join(""));
        }
    };

returnEscalera2(10);
