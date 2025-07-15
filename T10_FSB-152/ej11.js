let votos= ["Ana", "Carlos", "Ana", "María", "Carlos", "Ana", "Luis", "María", "Carlos", "Ana"];
let con={};

for(let i of votos){
    if(con[i]){
        con[i]++;
    }
    else{
        con[i]=1;
    }
}

let gana="";
let votoMax=0;

for (let i in con){
    console.log(`${i}: ${con[i]} votos`)
    if(con[i]>votoMax){
        gana = i;
        votoMax=con[i];
    }
}

console.log(`Ganador: ${gana} con ${votoMax} votos`)