let texto= "JavaScript es un lenguaje de programacion muy popular"
let opcion1=texto.split(" ")
let opcion2=1
//opcion 1
console.log(`El  texto tiene ${opcion1} palabras`)

//opcion 2
for (let i of texto){
    if(i== " "){
        opcion2++;
    }
}
console.log(`El  texto tiene ${opcion2} palabras`)
