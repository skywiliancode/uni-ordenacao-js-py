// function insertionSort(arr) {
//   const n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let currentValue = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > currentValue) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = currentValue;
//   }
//   return arr;
// }

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {

    let currentValue = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentValue
  }
  return arr
}

// Exemplo de uso:
let array = [12, 11, 13, 5, 6];
console.log("Array desordenado:", array);
console.log("Array ordenado:", insertionSort(array));