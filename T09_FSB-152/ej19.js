for (let num=2; num<=30;num++){
    let esPrimo=true;
    for(let j=2;j<num;j++){
        if(num % j === 0){
            esPrimo=false
        }
    }
    if(esPrimo){
        console.log(num)
    }
}