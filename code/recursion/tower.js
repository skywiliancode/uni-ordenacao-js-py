function moveElements(arrayA, arrayB, arrayC, n) {
  // Caso base: quando há apenas um elemento no array A, move-o para o array C
  if (n === 1) {
    arrayC.push(arrayA.pop());
    return;
  }

  // Move n-1 elementos de A para B usando C como auxiliar
  moveElements(arrayA, arrayC, arrayB, n - 1);

  // Move o último elemento de A para C
  arrayC.push(arrayA.pop());

  // Move n-1 elementos de B para C usando A como auxiliar
  moveElements(arrayB, arrayA, arrayC, n - 1);
}

// Define os arrays A, B e C
let arrayA = [3, 2, 1];
let arrayB = [];
let arrayC = [];

// Chama a função recursiva para mover os elementos entre os arrays
moveElements(arrayA, arrayB, arrayC, arrayA.length);

// Exibe os resultados
console.log("Array A:", arrayA);
console.log("Array B:", arrayB);
console.log("Array C:", arrayC);
