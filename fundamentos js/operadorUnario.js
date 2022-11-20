// MANTENHA O SEU CÓDIGO O MAIS SIMPLES POSSÍVEL!!!

let num1 = 1
let num2 = 2

num1++ // precedência menor
console.log(num1) // Output = 2

--num1 // precedência maior
console.log(num1) // Output = 1

console.log(++num1 === num2--) // Output = true
/* 
    ++num1 foi executado antes da comparação
    num2-- foi executado depois da comparação
    no momento de exibir essa comparação é a mesma coisa que:
    (num1) 2 === 2 (num2) = true
    só depois da comparação o 'num2' passou a ser '1'
*/