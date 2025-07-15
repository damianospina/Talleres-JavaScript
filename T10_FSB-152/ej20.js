let fibonacci=[0,1]
let pares=[]
for (let i=0;i<=15;i++){
    let numero=fibonacci[i]+fibonacci[i+1]
    fibonacci.push(numero)
    if(numero%2===0){
        pares.push(numero)
    }
}
console.log(`Secuencia Fibonacci: [${fibonacci}] \nNumeros pares en la secuencia: [${pares}]`)