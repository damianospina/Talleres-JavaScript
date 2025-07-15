let num=17;
let esPrimo=true;

if(num<=1){
    esPrimo=false
}
else{
    for(let div=2;div<num;div++){
        if(num % div ===0)
            esPrimo=false
        break
    }
}

if(esPrimo){
    console.log(`El numero ${num} es primo`)
}
else{
    console.log(`El numero ${num} no es primo`)

}