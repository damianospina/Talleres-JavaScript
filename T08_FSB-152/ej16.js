let valores=[0,"","0","false",null,undefined,[],{}];

for(let i=0; i< valores.length;i++){
    console.log(`El valor ${valores[i]} es : ${!!valores[i]?"verdadero":"falso" }`)
}