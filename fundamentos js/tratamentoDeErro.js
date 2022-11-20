// Mecanismo de tratamento de erro (try - catch - throw)

function tratarErroELancar(erro){
    // opção 1 => throw new Error ('Deu ruim...')
    // opção 2 => throw 'Deu erro!'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
        /* independente de ter erro ou não 
           executará o texto 'final' */
    }
}

const obj = { nome: 'Luan'} 
// será corrigido se usar para "name" ao invés de "nome"
imprimirNomeGritado(obj)