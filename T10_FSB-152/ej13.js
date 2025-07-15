let divisores = {};
let numPerf = [];

for (let i = 1; i < 30; i++) {
    let division = [];
    for (let j = 1; j < i; j++) { // Empieza en 1, no en 0
        if (i % j === 0) {
            division.push(j);
        }
    }
    divisores[i] = division;
}

for (let k in divisores) {
    let variable = divisores[k];
    let suma = variable.reduce((acc, val) => acc + val, 0); // Suma todos los divisores
    if (suma == k) {
        numPerf.push(k);
        console.log(`Verificando numero ${k}: Divisores ${divisores[k]}, suman: ${k} \n- Es perfecto`);
    }
}
console.log("numeros perfectos encontrados: " + numPerf);