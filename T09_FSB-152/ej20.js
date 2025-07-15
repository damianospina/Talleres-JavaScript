let saldo=1000;
let opciones=[1,2,3,2,1,2,3,1,2,2,4]
let retiros={1:500,4:1000,6:600,9:1000,11:100}
let depositos={2:300,7:800};
let opcion=0
let indiceOp=0;
do{
    console.log(`===CAJERO AUTOMATICO=== \n1. Consultar saldo \n2. Retirar dinero \n3. Depositar dinero \n4. Salir`)
    opcion=opciones[indiceOp]
    console.log("Opción seleccionada:", opcion);
    switch (opcion){
        case(1):
        console.log(`Su saldo es de: ${saldo}`)
        break;
        case(2):
        let retirar=retiros[indiceOp];
        console.log(`Por favor digite cuanto desea retirar \n${retirar}`)
        if(retirar<=saldo){
            saldo=saldo-retirar
            console.log(`Retiro efectuado de manera exitosa, su nuevo saldo es: ${saldo}`)
        }
        else{
            console.log("Saldo insuficiente, hasta luego")
        }
        break;
        case(3):
        let depositar=depositos[indiceOp];
        console.log(`Por favor digite cuanto desea depositar \n${depositar}`)
            saldo=saldo+depositar
            console.log(`Deposito efectuado de manera exitosa, su nuevo saldo es: ${saldo}`)
        break;
    }
    indiceOp++;
}while(opcion!==4)
console.log(`Hasta luego que tenga un feliz día`)
