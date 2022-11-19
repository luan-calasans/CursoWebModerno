function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // Math.floor => arredonda para baixo
}

console.log(rand([30, 50]))

console.log(rand([300]))

console.log(rand([]))

console.log(rand([, 10]))

// console.log(rand()) => isso dará erro