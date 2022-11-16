// É acessado os objetos no JavaScript a partir da notação ponto

// console no JavaScript é um objeto
console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola 2'
console.log(obj1.nome)

function Obj(nome){
    // atributo público = this (visível para fora)
    this.nome = nome
    this.exec = function(){
        console.log('Executando...')
    }
}

const obj2 = new Obj('Cadeiras')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()