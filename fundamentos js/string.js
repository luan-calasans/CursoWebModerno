/*
    TIPOS DE STRINGS:
    ""
    ''
    ``
*/

const escola = "Calasans"

// retorna o índice da string string.charAt()
console.log(escola.charAt(4))

// retorna se há a letra l na variável escola
console.log(escola.indexOf('C'))

// imprimir do índice 1 para frente (do "a" para frente)
console.log(escola.substring(1))

// significa que irá do índice 0 até o índice 3, 
// sem incluir o índice 3
console.log(escola.substring(0,3))

// outra forma de imprimir um texto (concatenação)
console.log("Escola ".concat(escola).concat("!"))

// irá retirar o primeiro "s" e substituir pela letra "z"
console.log(escola.replace('s', 'z'))

// converter strings separadas por vírgulas em uma estrutura de array
console.log("Luan,Ederson,Manuella".split(","))