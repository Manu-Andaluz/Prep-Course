// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let newObj = Object.keys(objeto).map(function (key) {
    return [key, objeto[key]];
  });

  return newObj;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  obj = {};
  let arr = string.split("");
  //Primer for loop
  for (i = 0; i <= arr.length - 1; i++) {
    let contador = 0;
    //Segundo for loop
    for (x = 0; x <= arr.length - 1; x++) {
      //Encontrar elemento repetido
      if (arr[i] === arr[x]) {
        //Sumando la vez repetida a un contador
        contador++;
        //Asignando a la variable obj el elemento y contador
      }
    }
    if (i === arr.indexOf(arr[i])) {
      obj[arr[i]] = contador;
    }
  }

  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arr = [];
  let string = "";

  for (i = s.length - 1; i >= 0; i--) {
    if (s[i] === s[i].toUpperCase()) {
      arr.unshift(s[i]);
    }
  }

  for (i = 0; i <= s.length - 1; i++) {
    if (s[i] === s[i].toLowerCase()) {
      arr.push(s[i]);
    }
  }

  for (let item of arr) {
    string += item;
  }

  return string;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frase = str.split(" ");
  let string = "";

  frase.forEach((item, index) => {
    for (let i = item.length - 1; i >= 0; i--) {
      if (item[i].length <= 1) {
        string += item[i];
      }
    }
    if (index !== frase.length - 1) {
      string += ' '
    }
  })
  return string;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let reverse = numero.toString().split('').reverse()
  reverse = reverse.join('')

  let normal = numero.toString().split('')
  normal = normal.join('')

  if (normal === reverse) {
    return 'Es capicua'
  } else {
    return 'No es capicua'
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let string = ''
  let arr = cadena.split('').filter(element => {
    return element != 'a' && element != 'b' && element != 'c'
  })

  for (let item of arr) {
    string += item
  }

  return string
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let array = []

  array = arr.sort((a, b) => { return a.length - b.length })

  return array
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let arr = []

  for (i = 0; i <= arreglo1.length - 1; i++) {
    for (x = 0; x <= arreglo2.length - 1; x++) {
      if (arreglo1[i] === arreglo2[x]) {
        arr.push(arreglo1[i])
      }
    }
  }

  return arr.sort((a, b) => {
    if (a === b) {
      return 0
    }
    if (a > b) {
      return 1
    }
    return -1
  })
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
