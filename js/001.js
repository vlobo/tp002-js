/*

1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que 
ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

*/

let edad = parseInt(prompt("Ingresa tu edad"));
console.log(edad);

if (edad > 18){
    document.write("Ya puedes conducir")
    console.log(edad)
}
else if(isNaN(edad)){
    document.write("ingresa un número entero y valido; no texto")
    console.log(edad)
}
    
else{
    document.write("no puedes votar")
}