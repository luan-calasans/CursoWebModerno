/*
Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por Exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2º mês
*/

function nomeDoMes(numero){
    let diaDoMes = ''
    switch (numero) {
        case 1:
            diaDoMes = 'Mês de janeiro'
            break;
        case 2:
            diaDoMes = 'Mês de fevereiro'
            break;
        case 3:
            diaDoMes = 'Mês de março'
            break;
        case 4:
            diaDoMes = 'Mês de abril'
            break;
        case 5:
            diaDoMes = 'Mês de maio'
            break;
        case 6:
            diaDoMes = 'Mês de junho'
            break;
        case 7:
            diaDoMes = 'Mês de julho'
            break;
        case 8:
            diaDoMes = 'Mês de agosto'
            break;
        case 9:
            diaDoMes = 'Mês de setembro'
            break;
        case 10:
            diaDoMes = 'Mês de outubro'
            break;
        case 11:
            diaDoMes = 'Mês de novembro'
            break;
        case 12:
            diaDoMes = 'Mês de dezembro'
            break;
        default:
            diaDoMes = `Não existe mês ${numero}`
            break;
    }

    return console.log(diaDoMes)
}

nomeDoMes(1)
nomeDoMes(2)
nomeDoMes(3)
nomeDoMes(4)
nomeDoMes(5)
nomeDoMes(6)
nomeDoMes(7)
nomeDoMes(8)
nomeDoMes(9)
nomeDoMes(10)
nomeDoMes(11)
nomeDoMes(12)
nomeDoMes(13)