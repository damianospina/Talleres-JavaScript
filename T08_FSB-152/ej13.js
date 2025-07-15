let nombre = "María";
let edad = 25;
let ciudad = "Barcelona";
let profesion = "Diseñadora";

console.log(`¡Hola ${nombre}! Bienvenida al sistema \n`);
console.log(`${nombre} tiene ${edad}, vive en ${ciudad} y es ${profesion} \n${(edad>65 ?"usted ya esta jubilado" : "te faltan" + (65-edad)+ "años para jubilarte")}`);
