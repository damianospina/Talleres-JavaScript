let capitalInicial = 5000;
let interesAnual = 0.035;
let tiempo = [1,2];
let capitalFinal1 = capitalInicial + (capitalInicial * interesAnual * tiempo[0]);
let capitalFinal2 = capitalInicial + (capitalInicial * interesAnual * tiempo[1]);

console.log(`El capital inicial fue de: ${capitalInicial}$ con una tasa de interes anual de: ${(interesAnual * 100).toFixed(1)}%
    `)
console.log(`El dinero que tendra al cabo de ${tiempo[0]} años es: ${capitalFinal1}$`)
console.log(`El dinero que tendra al cabo de ${tiempo[1]} años es: ${capitalFinal2}$`)