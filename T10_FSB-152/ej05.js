let palabra="programacion"
let vocales="aeiou"
let cont=0;
for (let letra of palabra){
    letra=letra.toLowerCase();
    if(vocales.includes(letra)){
        cont++;
    }
}
console.log(`La palabra ${palabra} tiene ${cont} vocales`);