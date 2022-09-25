const melhorSobrenome = "Calasans";

const contaSimples = 10 / 3;
// .toFixed(2) IRÁ COLOCAR APENAS DUAS CASAS DEPOIS DA VÍRGULA
console.log(contaSimples.toFixed(2)); // output -> 3,33

const outraConta = Math.pow(10, 2);
// Math.pow(10, 2) É A MESMA COISA QUE 10 ELEVADO A 2
console.log(outraConta); // output -> 100

const terceiraConta = Math.PI * 10;
// Math.PI RETORNA O VALOR DE PI 3,14.....
console.log(terceiraConta.toFixed(11)); // output -> 31.41592653590

// ().charAt A PARTIR DO ÍNDICE RETORNA O CARACTERE ESPECÍFICO
console.log(melhorSobrenome.charAt(1)); // output -> a

// ().indexOf A PARTIR DO CARACTERE RETORNA O ÍNDICE ESPECÍFICO
console.log(melhorSobrenome.indexOf("C")); // output -> 0

// ().substring A PARTIR DO ÍNDICE RETORNAR O VALOR EM STRING
// E TODOS OS OUTROS CARACTERES APÓS ELE
console.log(melhorSobrenome.substring(3)); // output -> asans

// ().concat CONCATENA VALORES
console.log(
  "Concat = ".concat(melhorSobrenome).concat(outraConta).concat(terceiraConta)
);
// output -> Concat = Calasans10031.41592653589793

// ().replace SUBSTITUI UM VALOR POR OUTRO
console.log(melhorSobrenome.replace("C", "L")); // output -> Lalasans

// ().split TRANSFORMA O TEXTO EM UMA LISTA SEPARADOS POR ALGO, GERALMENTE POR VÍRGULA
console.log("Luan,Luciana,Ederson,Manuella".split(",")); // output -> [ 'Luan', 'Luciana', 'Ederson', 'Manuella' ]
