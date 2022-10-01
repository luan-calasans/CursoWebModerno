// OBS: Sempre quando for querer zerar o valor de uma variável atribua o valor de nullo (null) ao invés de undefined. Deixe que o próprio programa defina como undefined

let valor
console.log(valor) 
// valor => nunca foi inicializada

valor = null 
// ausência de valor 'vazia'
console.log(valor)

const produto = {}
console.log(produto.preco) // produto está definido, mas o 'preco' não => logo retornará undefined

produto.preco = 12.34
console.log(produto)

// evite fazer isso
produto.preco = undefined 

/* Faça isso:
    *  delete produto.preco (IDEAL!!)
    *  produto.preco = null
*/    

produto.preco = null

console.log(produto.preco)
console.log(produto)
