/* Operadores 
    Unário = um único operando
    Binário = dois operandos
    Ternário = três operandos
*/

/*  outra forma de fazer: 

- - - - - - - - - - -

const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado' 
}

*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

/* 
Operador Ternário é composto de 3 partes 
** Equivalente ao IF / ELSE
    1. Expressão
    2. Resultado caso a expressão seja verdadeira
    3. Resultado caso a expressão seja falsa
*/