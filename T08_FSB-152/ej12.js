let listaComprasTexto="pan,leche,huevos,queso,manzanas";
let listaCompras=listaComprasTexto.split(",");
console.log("numero de prodcutos: ",listaCompras.length)
console.log(`productos:`)
for (let i=0; i < listaCompras.length;i++){
    console.log(`${i+1}. ${listaCompras[i]}`)
}
console.log(`Lista con guiones: "${listaComprasTexto.replaceAll(",","-")}"`)