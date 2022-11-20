/*
TABELA VERDADE

    v e v -> v
    v e f -> f
    f e f -> v
    f e v -> f

    v ou v -> v
    v ou f -> v
    f ou f -> f
    f ou v -> v

    ** xor -> se lê 'exclusivo' 
    ** OBRIGATORIAMENTE OS DOIS TEM QUE SER != PARA SER VERDADEIRO
    v xor v -> f
    v xor f -> v
    f xor v -> v
    f xor f -> f

    ** NEGAÇÃO LÓGICA
    !v -> f
    !f -> v
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // OU (um precisa ser verdadeiro)
    const comprarTv50 = trabalho1 && trabalho2 // E (os dois precisam ser verdadeiros)
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // XOR (um tem que ser != do outro para ser verdadeiro)
    const manterSaudavel = !comprarSorvete // Operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log('Caso 1')
console.log(compras(true, true))

console.log('Caso 2')
console.log(compras(true, false))

console.log('Caso 3')
console.log(compras(false, false))

console.log('Caso 4')
console.log(compras(false, true))
