/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’
*/
let numLetra = 0;
let dni = 0;

do{

dni = parseInt(prompt("Ingrese su número de DNI"));

if (dni > 0 && dni <= 99999999) {
    numLetra = dni % 23;
    switch (numLetra) {
      case 0:
        document.write(`Tu número de DNI corresponde a la letra T`);
        break;
      case 1:
        document.write(`Tu número de DNI corresponde a la letra R`);
        break;
      case 2:
        document.write(`Tu número de DNI corresponde a la letra W`);
        break;
      case 3:
        document.write(`Tu número de DNI corresponde a la letra A`);
        break;
      case 4:
        document.write(`Tu número de DNI corresponde a la letra G`);
        break;
      case 5:
        document.write(`Tu número de DNI corresponde a la letra M`);
        break;
      case 6:
        document.write(`Tu número de DNI corresponde a la letra Y`);
        break;
      case 7:
        document.write(`Tu número de DNI corresponde a la letra F`);
        break;
      case 8:
        document.write(`Tu número de DNI corresponde a la letra P`);
        break;
      case 9:
        document.write(`Tu número de DNI corresponde a la letra D`);
        break;
      case 10:
        document.write(`Tu número de DNI corresponde a la letra X`);
        break;
      case 11:
        document.write(`Tu número de DNI corresponde a la letra B`);
        break;
      case 12:
        document.write(`Tu número de DNI corresponde a la letra N`);
        break;
      case 13:
        document.write(`Tu número de DNI corresponde a la letra J`);
        break;
      case 14:
        document.write(`Tu número de DNI corresponde a la letra Z`);
        break;
      case 15:
        document.write(`Tu número de DNI corresponde a la letra S`);
        break;
      case 16:
        document.write(`Tu número de DNI corresponde a la letra Q`);
        break;
      case 17:
        document.write(`Tu número de DNI corresponde a la letra V`);
        break;
      case 18:
        document.write(`Tu número de DNI corresponde a la letra H`);
        break;
      case 19:
        document.write(`Tu número de DNI corresponde a la letra L`);
        break;
      case 20:
        document.write(`Tu número de DNI corresponde a la letra C`);
        break;
      case 21:
        document.write(`Tu número de DNI corresponde a la letra K`);
        break;
      case 22:
        document.write(`Tu número de DNI corresponde a la letra E`);
        break;
        default:
        alert("debe ingresar un numero correcto ")

    }}
}while(confirm("quieres realizar la operación de nuevo"))
