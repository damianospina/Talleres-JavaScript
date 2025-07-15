let numeros = [100, 120, 130, 125, 140, 150, 160, 155, 170, 180]
let secuencia=[numeros[0]]
let mejorSecuencia=[numeros[0]]
let inicioMejorSecuencia=0
let finalMejorSecuencia=0

console.log(numeros[6])
for (let i=1; i < numeros.length;i++){
    //son secuencia
    if(numeros[i]>=numeros[i-1]){
        secuencia.push(numeros[i])
        if(inicioMejorSecuencia===0){}
    }
    //no son secuencia
    else{
        if(secuencia.length>mejorSecuencia.length){
            mejorSecuencia=secuencia
            inicioMejorSecuencia=i-secuencia.length
            finalMejorSecuencia=i-1
        }
        secuencia=[numeros[i]]
    }
}
console.log(`Mayor racha de crecimiento: ${mejorSecuencia.length} días consecutivos (días ${inicioMejorSecuencia} - ${finalMejorSecuencia}) \nVentas en esa racha: [${mejorSecuencia}]`)

console.log(`${"-".repeat(25)} prueba ubicacion de racha ${"-".repeat(25)}`)
for(let i=inicioMejorSecuencia;i<=finalMejorSecuencia;i++){
    console.log(numeros[i])
}