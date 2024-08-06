/*

11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

*/

// dato1 = nombre1 ; edad1
// dato3 = nombre2 ; edad2
// dato3 = nombre2 ; edad3

const nombre1 = (prompt("Ingresa el primer nombre" ))
const edad1 = parseInt(prompt("Ingresa su Edad" ))

const nombre2 = (prompt("Ingresa el segundo nombre" ))
const edad2 = parseInt(prompt("Ingresa su Edad" ))

const nombre3 = (prompt("Ingresa el tercero nombre" ))
const edad3 = parseInt(prompt("Ingresa su Edad" ))

ordenarEdades = Math.max(edad1,edad2,edad3)
    console.log(ordenarEdades)

    if(ordenarEdades == edad1){
        document.write(`${nombre1} es mayor con ${edad1} años`)
    }
            else if (ordenarEdades == edad2){
            
            
                document.write(` ${nombre2} es mayor con ${edad2} años `)

            }

            else if (ordenarEdades == edad3){
            
            
                document.write(` ${nombre3} es mayor con${edad3} años`)

            }



            