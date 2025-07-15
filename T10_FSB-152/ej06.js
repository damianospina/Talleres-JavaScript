inventario = {laptops: 5, mouse: 25, teclados: 8, monitores: 15, cables: 3}

for(let elemento in inventario){
    if (inventario[elemento]<10){
        console.log(`Reabastecer ${elemento} cantidad: ${inventario[elemento]}`)
    }
    else{
        console.log(`Bien surtido ${elemento} cantidad: ${inventario[elemento]}`)
    }
}