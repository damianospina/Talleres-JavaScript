let array=[64, 34, 25]//, 12, 22, 11, 90]

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] < array[j] && i !== j) {
            // Elimina el elemento de la posición i
            let elemento = array.splice(i, 1)[0];
            // Inserta el elemento en la posición j
            array.splice(j, 0, elemento);
            // Ajusta el índice i para evitar saltar elementos
            if (i < j) {
                i--;
            }
            break; 
        }
    }
    console.log(`Pasada ${i+1}:[${array}]`);

}