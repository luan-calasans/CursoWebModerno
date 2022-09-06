const peso1 = 1.0
const peso2 = Number('2.5') // conversão de string para número

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
// .isInteger(verifica se é número inteiro)

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
// .toFixed(número de casas decimais depois da vírgula)

console.log(media.toString())
// .toString() -> vazia, converte em tipo texto, string

console.log(media.toString(2))
// .toString(2) - por exemplo -> converte em valor binário