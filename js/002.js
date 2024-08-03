/* 
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

*/

let nota = parseInt(
  prompt("Ingrese la nota del 0 al 10 para ver su calificación")
);
console.log(nota);

if (isNaN(nota)) {
  document.write("ingresa un valor númerico del 0 al 10");
}
  if (nota === 0 || nota === 1 || nota === 2) {
    document.write(`su nota ${nota}, es MUY DEFICIENTE`);
  } else if (nota === 3 || nota === 4) {
    document.write(`su nota ${nota}, es INSUFICIENTE`);
  } else if (nota === 5 || nota === 6) {
    document.write(`su nota ${nota}, es SUFICIENTE`);
  } else if (nota === 7) {
    document.write(`su nota ${nota}, es BUENA`);
  } else if (nota === 8 || nota === 9) {
    document.write(`su nota ${nota}, es NOTABLE`);
  } else if (nota === 10) {
    document.write(`su nota ${nota}, es SOBRESALIENTE`);
  }
  else if (nota > 10) {
    document.write(`no leiste bien el enunciado, volver a ingresar un número del 0 al 10`);
  }
