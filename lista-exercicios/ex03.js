/*
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$xx,xx", em que 'x' é o quanto o funcionário ganhou no mês
*/

function calcularSalario(hora, valorHora){
    const salario = hora * valorHora
    return console.log(`Salário = R$${salario.toFixed(2)}`)
}

calcularSalario(150, 40.5)