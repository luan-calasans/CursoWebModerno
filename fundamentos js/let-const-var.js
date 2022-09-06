/*  
    SEMPRE USE "let" OU "const"

    var + "nome da variável"
    = "recebe"
    var a = "aqui o valor da variável"
    
    Exemplo: var a = 3

Existem 3 tipos de classificação de variável:
    1. var (não pode ser reatribuída - escopo global)
    2. let (não pode ser reatribuída - escopo global)
    3. const
*/

var a = 3
let b = 4
var a = 30
b = 23

// let b = 23 -> vai dar erro

console.log(a, b) // output -> 30 23

a = 300
b = 230

console.log(a,b) // output -> 300 230

const c = 5
// c = 50 -> vai dar erro

console.log(c) // output -> 5