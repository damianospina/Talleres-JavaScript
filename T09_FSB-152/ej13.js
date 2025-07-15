const inventario ={
    fresas:40,
    uvas:30,
    cerezas:50,
    peras:20,
    frambuezas: 60
}
for (let producto in inventario){
    console.log(`Producto ${producto} cantidad: ${inventario[producto]}`)
}