{
    {
        { 
            var sera = "Será!???"
            console.log(sera) 
        }
    }
}
console.log(sera)

// variável global 
// (estará disponível dentro do objeto WINDOW.)

function teste(){
    var local = 123
    console.log(local)
}

teste()
// console.log(local) => dará erro
