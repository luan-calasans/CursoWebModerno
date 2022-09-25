let isAtivo = false
// console.log(isAtivo)

isAtivo = true
// console.log(isAtivo)

isAtivo = 1
// console.log(!isAtivo)

/* ! uma exclamação irá inverter a 
    lógica
   !! irá retroceder o valor anterior
*/

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'testando')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// Podemos colocar coisa que não são verdadeiras ou falsas
// Mas serão convertidas de acordo com o contexto

// Exemplos:

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ' || 123))

let nome = 'Luan'
console.log(nome || 'Desconhecido')
