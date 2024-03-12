function selectionSort(arr) {

  const arrayLength = arr.length

  for (let currentIndex = 0; currentIndex < arrayLength - 1; currentIndex++) {

    let minIndex = currentIndex

    for (let nextIndex = currentIndex + 1; nextIndex < arrayLength; nextIndex++) {

      if (arr[nextIndex] < arr[currentIndex]) {
        minIndex = nextIndex
      }
    }

    if (minIndex !== currentIndex) {
      let temp = arr[currentIndex]
      arr[currentIndex] = arr[minIndex]
      arr[minIndex] = temp
    }
  }

  return arr
}

// Exemplo de uso:
let array = [64, 25, 12, 22, 11];
console.log("Array desordenado:", array);
console.log("Array ordenado:", selectionSort(array));
