let valores = [42, "texto", null, undefined, []] 

for (let i =0;i <valores.length;i++){
    console.log(`===Analizando${valores[i]}=== \nTipo: ${typeof(valores[i])} \nComo se ve convertido string: "${String(valores[i])}" \nComo se ve convertido en numero: ${Number(valores[i])} \nComo se ve en convertido en booleano: ${Boolean(valores[i])} \n${"-".repeat(50)}`)
}