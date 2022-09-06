/* 
    O QUE É TIPAGEM FRACA? 
    -> 
    Não é preciso definir o tipo das variáveis ao declará-las, e esse tipo pode ser alterado a qualquer momento
*/

/* EVITE NOMES GENÉRICOS E SIGLAS!
   Exemplos:
        let valor = ''
        let numero = 1
        let pqp = false // Produtos Químico Perigoso... kkk
*/

let qualquer = 'Legal'
// entre "" '' `` -> significa que é um texto (string)
console.log(qualquer)
console.log(typeof qualquer) 
// retorna o tipo da variável "qualquer"

qualquer = 18.901
console.log(qualquer)
console.log(typeof qualquer) 
