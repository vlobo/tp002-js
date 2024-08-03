/*

4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

*/

let num1 = 0
let num2 = 0
do{

   num2 = parseInt(prompt("ingrese un número"))
  
    

if(isNaN(num2)){
    alert("debes escribir un número")
   
}else{
    num1 = num2 + num1
}
}
while(confirm("queres seguir sumando?"))

    document.write(`la suma total es ${num1} `)