let numero = 128;
let divisiones = 0;
while(numero>1){
    divisiones++;
    numero=numero/2;
    console.log(`Diviision ${divisiones}= ${numero}`)
}
console.log("Divisiones totales: ",divisiones)