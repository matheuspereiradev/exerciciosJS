
let pessoa = {
    "nome":"Matheus",
    "idade":22,
    "linguagens":["Java","PHP","Delphi", "Android","JS"]
}

//dentro do json nao tem metodos nem comentarios

/*
pessoa.nome    //Matheus
pessoa.linguagens   //["Java", "PHP", "Delphi", "Android", "JS"]

*/

let stringDoJson = JSON.stringify(pessoa) //"{"nome":"Matheus","idade":22,"linguagens":["Java","PHP","Delphi","Android","JS"]}"
//nao é mais possivel acessar as propriedas como stringDoJson.nome pois agr éum texto

//CONVERTER STRING PARA JSON

let stringNormal = '{"nome":"Matheus","idade":22,"linguagens":["Java","PHP","Delphi","Android","JS"]}'

let jsondastring = JSON.parse(stringNormal)
//agr essa string é um json e posso acessar as propriedades como jsondastring.nome