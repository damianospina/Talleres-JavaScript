let numeros= [150, -80, 200, -45, 300, 120, -30, 250, -100, 180]
let ganancias=0;
for(let num of numeros){
    if(num>0){
        ganancias++;
    }
}
console.log("Total de días con ganancias: ",ganancias)