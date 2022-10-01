// null != undefined

const a = {name: 'Teste'}
console.log(a)

const b = a

// neste caso os dois apontam para o mesmo local, logo, se um for alterado o outro também manterá essa alteração

// ATRIBUIÇÃO POR REFERÊNCIA

b.name = 'Opa'
// ISSO:
console.log(b)
// É IGUAL A ISSO:
console.log(a)

