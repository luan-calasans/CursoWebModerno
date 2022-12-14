// Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b // única linha

console.log(subtracao(10, 9))