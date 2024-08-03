/*

3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

let caracter = "un valor"
  
    
do{
    caracter = prompt("Ingrese una cadena de texto")
    console.log(caracter)   
    caracter = caracter + "_"
    document.write(caracter)
}
while(confirm("desea continuar"))
    
