let temperaturas = [22, 25, 19, 27, 24, 21, 26] //(°C)
let promedio = 0
let conProme = 0

for (i of temperaturas){
    promedio+=i
}
promedio=Number(promedio/temperaturas.length).toFixed(2)
for(let i of temperaturas){
    if(i>promedio){
        conProme++;
    }
}
console.log(`Promedio de temperatura: ${promedio}°C \nDias por encima del promedio: ${conProme}`)