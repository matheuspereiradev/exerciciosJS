
//trabalhr com strings=========================================================================

let nome='nike 123 sapato'

console.log(nome.toLocaleUpperCase())

let um='1'
//pode ser util caso tenha q preencher uma string com um carctere primeiro parametro tamanho final segundo com oq preenche
let milAoContrario= um.padStart(4,'0')//0001
let mil=um.padEnd(4,'0')//1000
um.padStart(6,'a0')// "a0a0a1"
//////////////////////////////////////////////////////////////////////////
let nomeBugado='       oi, \n eu sou dms,        '

nomeBugado.trim()//"oi, eu sou dms,"

//////////////////////////////////////////////

let frase="O rato roeu a roupa do rei de roma"

frase.split(" ")//["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "roma"]
//parametro é pelo que ele vai separar
frase.split("r")//["O ", "ato ", "oeu a ", "oupa do ", "ei de ", "oma"]

let arrayTeste = ["Oi","Pessoal","Do","JS"]
arrayTeste.join('<->')//"Oi<->Pessoal<->Do<->JS"

let matheus= 'matheus'

matheus.repeat(5)//"matheusmatheusmatheusmatheusmatheus"

