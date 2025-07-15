const estudiante ={
    nombre:"juan",
    edad:20,
    curso:"JavaScript",
    nota:9.5
}
for (llave in estudiante){
    console.log(`${llave}: ${estudiante[llave]}`)
}