/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
  Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

const columnas = parseInt(prompt("Ingrese la cantidad de Columnas"));
const filas = parseInt(prompt("Ingresa la cantidad de Filas"));
let celdas = columnas * filas;

// let num1 = (columnas * filas)+ ++

document.write(`<table><tbody>`);

for (let indiceFil = 1; indiceFil <= filas; indiceFil++) {
  document.write(`<tr>`);

  for (let indiceCol = 1; indiceCol <= columnas; indiceCol++) {
    document.write(`<td>${celdas}</td>`);
    celdas--;
  }

  document.write(`</tr>`);
}
document.write(`</tbody></table>`);
