let texto = "Juan Carlos Pérez González";

console.log(`Nombre completo:  \n Primer nombre: ${texto.substring(0,4)} \nSegundo nombre: ${texto.substring(5,11)} \nApellidos: ${texto.substring(11)} \nUltimas 8 letras: ${texto.slice(-8)} \n solo"perez: ${texto.substring(11,17)}`)