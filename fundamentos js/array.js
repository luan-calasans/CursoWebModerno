/* 
    Array é uma forma de agrupar múltiplos
    valores numa só variável
    Os arrayS são: heterogênios / indexados
*/

const valores = [7.7, 8.9, 6.5, 9.2]
console.log(valores)
console.log(valores[0], valores[3])
console.log(valores[4]) 
// índice 4 não existe, mas não irá exibir um erro, mas irá retornar 'undefined' na tela

valores[4] = 10
console.log(valores)

valores[10] = 10
console.log(valores)
// como há uma distância entre os valores que existem e os que não existem, exibirá no console.log() = '5 empty itens'

console.log("Existem:", valores.length, "valores no array")

valores.push({id: 3}, false, null, 'teste') 
// .push = adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
console.log(valores)

console.log(valores.pop()) 
// .pop = remove o último elemento de um array e retorna aquele valor.

delete valores[0] // neste caso => deleta o valor do índice 0
console.log(valores)

console.log(typeof valores) // No JavaScript o array é um objeto

