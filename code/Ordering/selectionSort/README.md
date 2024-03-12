# Selection Sort

O Selection Sort é um algoritmo de ordenação simples e intuitivo que divide a lista em duas partes: uma parte ordenada e outra não ordenada. A cada iteração, o algoritmo seleciona o menor elemento da parte não ordenada e o coloca na posição correta na parte ordenada.

## Como Funciona

1. **Iteração**: O algoritmo percorre a lista da esquerda para a direita.
2. **Seleção do Menor Elemento**: Em cada iteração, o algoritmo encontra o menor elemento na parte não ordenada da lista.
3. **Troca de Posição**: O menor elemento encontrado é trocado com o primeiro elemento da parte não ordenada, colocando-o na posição correta na parte ordenada.
4. **Continuação**: Este processo é repetido até que todos os elementos estejam na parte ordenada.

## Exemplo em JavaScript

```javascript
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// Exemplo de uso:
let array = [64, 25, 12, 22, 11];
console.log("Array desordenado:", array);
console.log("Array ordenado:", selectionSort(array));
```

## Complexidade

- Pior Caso: O(n^2)
- Melhor Caso: O(n^2)

## Vantagens e Desvantagens

- Vantagens:

  - Implementação simples.
  - Funciona bem para listas pequenas ou quase ordenadas.

- Desvantagens:

  - Ineficiente para listas grandes devido à sua complexidade quadrática.
  - Não é estável, o que significa que a ordem relativa de elementos iguais pode ser alterada.
