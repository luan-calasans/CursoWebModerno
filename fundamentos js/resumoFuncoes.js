// função sem retorno 

function somar(a, b){
    console.log(a + b)
}
console.log("Função sem retorno: ")
somar(4,2) // output = 6

// função com retorno

function subtrair(c, d){
    return c - d
}
console.log("Função com retorno: ")
console.log(subtrair(14,1)) // output = 13

// arrow function

const dividir = (z, s) => {
    return z / s
} 
console.log("Arrow function: ")
console.log(dividir(10,2)) // output = 5

// retorno implícito

const multiplicar = (x, y) => x * y 
console.log("Função com retorno implícito: ")
console.log(multiplicar(3,2)) // output = 6