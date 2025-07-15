let materias= {matematicas: {nota : 8.5, creditos: 4}, fisica: {nota: 7.2, creditos: 3}, quimica: {nota: 9.0, creditos: 3}, literatura: {nota: 6.8, creditos: 2}}

let valorCredito=1/12
let promedioPonderado=0
// console.log(`${valorCredito} == ${(valorCredito*4)*8.5}`)

for(let materia in materias){
    console.log(`${materia}: ${materias[materia].nota} (${materias[materia].creditos} creditos)`)
    promedioPonderado+=(valorCredito*materias[materia].creditos)*materias[materia].nota
}

console.log(`Promedio ponderado: ${promedioPonderado.toFixed(2)}`)
if(promedioPonderado>=7.0){
    console.log("Estado: Aprobado")
}
else{
    console.log("Estado: Desaprobado")
}