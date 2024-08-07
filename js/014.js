/*

14- Realiza un script que pida una cadena de texto y lo muestre
 poniendo el signo – entre cada carácter sin usar el método replace.
  Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


  */

  const palabra = prompt("ingrese un texto")

  

  console.log(palabra.length)
  console.log(palabra.charAt())


  for(i = 0; i <= palabra.length;i ++){

    document.write(`-${palabra.charAt(i)}`)
    
  console.log(palabra.length)
  console.log(palabra.charAt())
   
  }
