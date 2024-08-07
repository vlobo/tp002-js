/*

17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1

*/

const palabra = prompt("ingrese un texto")
let sumarVocal = 0


for(i = 0 ; i <= palabra.length; i++){
   
    if(palabra.charAt(i) === "a" || palabra.charAt(i) == "e" || palabra.charAt(i) == "i" || palabra.charAt(i) == "o" || palabra.charAt(i) == "u"){
      
        sumarVocal = i
        break
    }
    
}
   document.write(`la vocal "${palabra.charAt(sumarVocal)}" esta en la posición ${i} `)