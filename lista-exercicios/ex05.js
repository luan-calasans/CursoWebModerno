// Crie uma função que receba dois números e retorne se o primeiro é igual ao segundo

function maiorOuIgual(valor1, valor2){
    let resultado = Boolean
    if (valor1 === valor2){
        resultado = true
    }
    else{
        resultado = false
    }      
    return console.log(`${resultado}`)    
}

maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)