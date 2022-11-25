/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro for booleano, o retorno da função deverá ser o inverso. 
Por exemplo, 
    se a entrada for 'false', retornará 'true'. Se o parâmetro for numérico, o retorno será o número inverso. 
Por exemplo, 
    se for fornecido 1, o retorno será -1. 
Se o parâmetro de entrada não for nenhum dos tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ..."
*/

function inverso(value){
    const tipo = typeof value

    if(tipo == "boolean") {
        return !value
    } else if (tipo == "number") {
        return -value
    } else{
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}.`
    }   
    
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))