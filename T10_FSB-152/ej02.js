let contraseña=1007
for(let i=1000;i<=1010;i++){
    if(i===contraseña){
        console.log(`Contraseña encontrada: ${i}`);
        break;
    }
    else{
        console.log(`Probando con: ${i}`);
    }
}