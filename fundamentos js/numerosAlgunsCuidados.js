console.log(7/0.00000001) 
// output -> 700000000

console.log(7/0) 
// output -> infinity

console.log("10"/2) 
// output -> 5
// nesse caso vai verificar se o caractere "10" pode ser convertido para número para ai sim efetuar a divisão por 2

console.log("Show!" * 2) 
// output -> NaN (Not a Number)

console.log(0.1 + 0.7) 
// Imprecisão de números
// output -> 0.7999999999999999


// ISSO VAI DAR ERRO: 
// console.log(10.toString())
console.log((10).toString())
// output -> 10