/*
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias
OBS: Considere que um ano tem 365 dias. Desconsidere ano bissextos (365 dias) e desconsidere também dias decorridos desde o último aniversário
*/

function converterIdadeParaDias(idade){
    const calculo = 365 * idade
    return console.log(`Você viveu ${calculo} dias `)
}

converterIdadeParaDias(25)