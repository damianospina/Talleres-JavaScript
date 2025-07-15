let numeros = [1, 2, 3, 7, 8, 12, 13, 14, 15, 20]
let secuencia=[numeros[0]]
let mejorSecuencia=[numeros[0]]

for (let i=1; i < numeros.length;i++){
    //son secuencia
    if(numeros[i]===numeros[i-1]+1){
        secuencia.push(numeros[i])
    }
    //no son secuencia
    else{
        if(secuencia.length>mejorSecuencia.length){
            mejorSecuencia=secuencia
        }
        secuencia=[numeros[i]]
    }
}
console.log(`Secuencia mas larga: ${mejorSecuencia} con ${mejorSecuencia.length} numeros consecutivos`)