
let reg1= new RegExp("teste");
let reg2=/uma/;

console.log(/testando/.test("ttttttttestandoooooooooo"))
console.log(/testando/.test("ttttttttes"))

console.log(reg1.test("teste de carga"))


let txt='oi eu sou uma mensagem'

console.log(reg2.test(txt))


console.log(/[0-9]/.test("aqui tem numeros 126"))
console.log(/[1-4]/.test("aqui tem numeros 6"))

console.log(/[124]/.test("aqui tem numeros 6"))//verifica se tem 1, 2 ou 4

//\d -qualquer numero                                             (TEM NUMERO?)
//\w um caractere alfanumerico                                    (TEM NUMEROS E LETRAS?)
//\s qulquer espaco em branco (esapço quebra de linha paragrafo)  (TEM ESPAÇO EM BRANCO?)
//maiUsculo é uma negaçao
//\D somente o que nao é numero                                    (TEM CARACTERES QUE NAO SAO NUMERO)
//\W nao sao numero nem letas                                      (TEM ALGUM CARACTER ESPECIAL?)
//\S nao aceita espaço em branco                                   (TEM ALGO QUE NAO SEJA ESPAÇO EM BRANCO)
//. tudo menos nova linha

let letras='abcderhajsa';
let numeros=1234567;
let carcteres="!@#$%¨&*()"
let espaco = "       "
let numeletras="123jask"

const pontRegex=/./

console.log(pontRegex.test(letras))
//true
console.log(pontRegex.test(numeletras))
//true
console.log(pontRegex.test(numeros))
//true
console.log(pontRegex.test(carcteres))
//true
console.log(pontRegex.test(espaco))
//true


const barad=/\d/ // msm coisa q [0-9]

console.log(barad.test(letras))
//false
console.log(barad.test(numeletras))
//true
console.log(barad.test(numeros))
//true
console.log(barad.test(carcteres))
//false
console.log(barad.test(espaco))
//false
