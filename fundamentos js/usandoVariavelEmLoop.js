const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

// Resultado vai ser 10 para qualquer índice
funcs[2]()
funcs[8]()