/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés.
 Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

const palabra = prompt("ingrese un texto")

for(i = palabra.length ; i >= 0; i--){

    document.write(palabra.charAt(i))

}