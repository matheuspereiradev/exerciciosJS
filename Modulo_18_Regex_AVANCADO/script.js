

const verAno = /\d\d\d\d/
console.log('2018'+verAno.test('2018'))   //true
console.log('201821121'+verAno.test('201821121')) //true
console.log('2018a'+verAno.test('2018a'))    //true
console.log('2B18'+verAno.test('2B18'))  //false
console.log('20'+verAno.test('20'))      //false 

let palavrainiciada3letras = /\w\w\w/
console.log('2018'+palavrainiciada3letras.test('2018'))   //false
console.log('ab1'+palavrainiciada3letras.test('ab1'))    //false
console.log('abc'+palavrainiciada3letras.test('abc'))    //true
console.log('abcs'+palavrainiciada3letras.test('abcs'))  //true


////////////////////////////NEGAÇAO/////////////////////////////////////////////
console.log(/[^a-f]/.test('abcd'))      //false     //existe alguma coisa que NAO esta entre a e f
console.log(/[a-f]/.test('lAkiu'))      //true      //existem algarismos que estao entre a e f

////////////////////////////////OPERADOR PLUS//////////////////////////////////////

console.log(/\d+/.test('aksakl'))  //false
console.log(/\d+/.test('1a'))  //true
console.log(/\d+/.test('2113232'))  //true
console.log(/\d+/.test('aksq2akl123'))  //true


///////////////////////////////////QUESTION//////////////////////////////////////////////////

console.log(/[0-9][a-f][º]?/.test('9aº'))  //TRUE
console.log(/[0-9][a-f][º]?/.test('9a'))  //TRUE
console.log(/[0-9][a-f][º]?/.test('aaº'))  //false
console.log(/[0-9][a-f][º]?/.test('9p'))  //false


////////////////////////////////////////////////////////////////////
console.log(/\d{5}-\d{3}/.test('63540-000')) /// true
console.log(/\d{5}-\d{3}/.test('63540000'))  //false
console.log(/\d{5}-\d{3}/.test('63540-0009')) //true
console.log(/\d{5}-\d{3}/.test('163540-000')) //true

let telefone = /\(\d{2}\)\d{4,5}\-\d{4}/


//////////////////////exec

console.log(/\d/.exec('existe algum numero 1')) //["1", index: 20, input: "existe algum numero 1", groups: undefined]
console.log(/\d/.exec('existe algum numero 2')) //["2", index: 20, input: "existe algum numero 2", groups: undefined]0: "2"groups: undefinedindex: 20input: "existe algum numero 2"length: 1__proto__: Array(0)
console.log(/\d/.exec('existe algum numero?'))  //null

//match

let oNumero100= 'o numero 100 esta aqui'.match(/\d+/)
//["100", index: 9, input: "o numero 100 esta aqui", groups: undefined]


//       or |

console.log(/\d+ (banana|maca|laranja)/.test('12 macas')) ///true
console.log(/\d+ (banana|maca|laranja)/.test('12 batata'))//false
console.log(/\w+ (Matheus|Joao|Lucas)/.test('Nome: Matheus'))//true
console.log(/\w+ (Matheus|Joao|Lucas)/.test('Nome2: Matheus'))//false
console.log(/\w+ (Matheus|Joao|Lucas)/.test('Nome: Maria'))//false

let dominio=/[?www.]\w+\.com.br|.com/


console.log(dominio.test('www.google.com'));  //true
console.log(dominio.test('www.google.com.br')); //true
console.log(dominio.test('ww3w.google.com'));  //true pq o www agr é opcional
console.log(dominio.test('www..com'));         //true
console.log(dominio.test('google.com'));      //true
console.log(dominio.test('www.google.net')); //false

//let dt=/[0-31]{2}[/|-][0-12]{2}[/|-]\d{2,4}/;
let dt=/[0-9]{2}[/|-][0-9]{2}[/|-]\d{2,4}/;

dt.test('11/11/11'); //true
dt.test('11a/11/11') //false

//STRING TERMINADA EM ID
let stringID = /\d+ID\b/ //\b indica que a string terminacm  b

stringID.test('jasksID') //false
stringID.test('123ID') //true
stringID.test('123ID0') //false
stringID.test('jasks123ID') //true

let marca = /marca: (NIKE|ADIDAS|PUMA)/
