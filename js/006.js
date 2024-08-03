/*

6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666

*/

const num1 = parseInt(prompt("Ingrese un numero del 1 al 30"))

for(let indiceNum1 = 1; indiceNum1 <= num1; indiceNum1 ++){
    
    for(let repetir = 0; repetir < indiceNum1;repetir++){

        document.write(`${indiceNum1}`)
        console.log(indiceNum1)
            }
            document.write("<br>")
}


