/*

15- Realiza un script que cuente el número de vocales que tiene un texto.

*/

const palabra = prompt("ingrese un texto")
let sumarVocal = 0

for(i = 0 ; i <= palabra.length; i++){
   
    if(palabra.charAt(i) === "a" || palabra.charAt(i) == "e" || palabra.charAt(i) == "i" || palabra.charAt(i) == "o" || palabra.charAt(i) == "u"){
      
        sumarVocal ++
    }
    
}
   document.write(`la palabra escrita tiene ${sumarVocal} vocales`)