// Recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/* 
DESTRUCTURING

    É uma expressão que permite extrair dados de um Array ou Object em variáveis distintas.
*/

// Significa => Tire da variável pessoa o atributo 'nome' e 'idade'
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) 
// cep não tem valor

// não existe isso na variável pessoa
const { conta: { ag, num } } = pessoa
console.log(ag, num)