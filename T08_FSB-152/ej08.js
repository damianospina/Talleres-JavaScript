let textOriginal= " Aprender JavaScript es muy Divertido ";
let textoLimpio = textOriginal.trim();

console.log('Texto original: "' + textOriginal + '"');
console.log("Longitud original: " + textOriginal.length);
console.log('Texto limpio: "' + textoLimpio + '"');
console.log("Longitud limpia: " + textoLimpio.length);
console.log('En mayúsculas: "' + textoLimpio.toUpperCase() + '"');
console.log('En minúsculas: "' + textoLimpio.toLowerCase() + '"');
console.log("Primer carácter: " + textoLimpio[0]);
console.log("Último carácter: " + textoLimpio[textoLimpio.length - 1]);