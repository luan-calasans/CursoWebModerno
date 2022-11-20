// Para o NODE cada arquivo é um módulo diferente

let a = 3

// FUJA DO ESCOPO GLOBAL!
global.b = 123

this.c = 456
this.d = false
this.e = 'false'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variável <>sem var/let</>
abc = 3 // não faça isso !!!!
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'Teste' }