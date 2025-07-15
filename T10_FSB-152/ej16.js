let dadosSimulados=[1,3,6,5,6,2,5,6,3,5,2,1]
let turno=0
let sumJug1=0
let sumJug2=0

for (let i=0;i<dadosSimulados.length;i+=2){
    turno++;
    sumJug1+=dadosSimulados[i]
    sumJug2+=dadosSimulados[i+1]
    console.log(`Turno ${turno} - Jugador 1: ${dadosSimulados[i]}, Total: ${sumJug1}`)
    console.log(`Turno ${turno} - Jugador 2: ${dadosSimulados[i+1]}, Total: ${sumJug2}`)
    if(sumJug1===sumJug2){
        console.log("*".repeat(15)+"EMPATE"+"*".repeat(15))
        console.log("Tirar unavez mas")
    }
}
if(sumJug1>sumJug2){
    console.log(`Jugador 1 gana con ${sumJug1} puntos`)
}
else{
    console.log(`Jugador 2 gana con ${sumJug2} puntos`)
}