let palindromos=[]
for(let i=100;i<=150;i++){
    let text=i.toString()
    if(text[0]===text[2]){
        console.log(`Verificando ${i}: Sí es palindromo`)
        palindromos.push(i)
    }
}
console.log(`Palindromos encontrados: [${palindromos}]`)
