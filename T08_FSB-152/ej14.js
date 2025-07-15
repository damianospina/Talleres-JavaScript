let numFactura= "7";
let codProducto= "42";
let idUser="123";

let factura="F-"+numFactura.padStart(3,0)
let producto="PROD-"+codProducto.padStart(4,0)
let user="USER-"+idUser.padStart(5,0)

console.log(`Factura: ${factura} \nProducto: ${producto} \nUsuario: ${user} \n${"-".repeat(19)} \n${"!OFERTA¡".repeat(3)
}`)