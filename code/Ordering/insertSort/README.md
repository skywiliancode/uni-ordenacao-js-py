# Função insertionSort

A função `insertionSort` implementa o algoritmo de ordenação por inserção em JavaScript. Este algoritmo é eficiente para ordenar pequenos conjuntos de dados ou conjuntos de dados que já estão quase ordenados. Ele percorre a lista e, para cada elemento, o move para a posição correta na parte ordenada da lista.

## Como usar

1. **Chamada da Função**: Para usar a função `insertionSort`, você precisa passar um array como argumento.

   Exemplo:

   ```javascript
   let arr = [12, 11, 13, 5, 6];
   insertionSort(arr);
   console.log("Lista ordenada:", arr);
   ```

2. **Saída**: A função `insertionSort` ordena o array fornecido como argumento e modifica o array original. Após a chamada da função, o array estará ordenado.

   Exemplo de Saída:

   ```
   Lista ordenada: [5, 6, 11, 12, 13]
   ```

## Funcionamento

1. A função `insertionSort` itera sobre o array a partir do segundo elemento.
2. Em cada iteração, seleciona o elemento atual e o compara com os elementos na parte ordenada do array.
3. Move os elementos maiores que o elemento atual uma posição à frente para abrir espaço para o elemento atual.
4. Insere o elemento atual na posição correta na parte ordenada do array.
5. Repete o processo até que todos os elementos do array estejam ordenados.

## Complexidade

- **Melhor Caso**: O(n) - quando o array já está ordenado.
- **Caso Médio e Pior Caso**: O(n^2) - para arrays desordenados.

## Observações

- Este algoritmo é eficiente para ordenar pequenos conjuntos de dados ou conjuntos de dados quase ordenados.
- Não é recomendado para grandes conjuntos de dados devido à sua complexidade quadrática.
- É um algoritmo estável, o que significa que preserva a ordem relativa de elementos iguais.
