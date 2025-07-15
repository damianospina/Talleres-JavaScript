let textErrores= "Me gusta Python. Python es facil. Python es rapido.";
let correciones={"Python":"JavaScript","facil":"fácil","rapido":"rápido"};
let textCorregido=textErrores;

for (let claves in correciones){
    textCorregido=textCorregido.replaceAll(claves,correciones[claves]);
}
console.log("texto original: ",textErrores);  
console.log("texto corregido: ",textCorregido);    
