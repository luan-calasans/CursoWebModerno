// par nome/valor

const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'Falaaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 28,
    peso: 72,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123,
        bairro: 'Vila Maravilhosa'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)