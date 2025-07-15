let listaNumeros = [
    42,
    "123",
    NaN,
    3.14,
    "texto",
    Infinity,
    0];

console.log("numeros a validar:", listaNumeros);

for (let i=0; i<listaNumeros.length; i++){
    let numeroValidar= listaNumeros[i];
    console.log("El numero a validaar es: ",numeroValidar);
    console.log(`Es numero: ${ typeof numeroValidar === 'number'} \nEs finito: ${Number.isFinite(numeroValidar)} \nEs entero: ${Number.isInteger(numeroValidar)} \n--------------------`)
}