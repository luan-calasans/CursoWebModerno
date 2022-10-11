// BLOCO que agrupa códigos que recebe parâmetros de entrada e no final retorna um valor (pode retornar nada ou não)

console.log('Função sem retorno')

// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) 
// apenas um valor foi chamado = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8, 9, 10)
// pega apenas os dois primeiros valores e soma e ignora o restante = 12 || (2, 10) || (2 + 10)
imprimirSoma() // valores não foram informados

console.log('------------------')

console.log('Função com retorno')

// Função com retorno
function soma(a, b = 1){
    // valor padrão b = 0, quando não for passado na função
    return a + b
}

console.log(soma(2)) // 2 + 1 = 3 (resultado)
console.log(soma())