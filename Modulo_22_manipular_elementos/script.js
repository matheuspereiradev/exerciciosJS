let novoElemento = document.createElement('p');
let texto = document.createTextNode('TEXTO DA TAG P ADICIONADO NO JS');

novoElemento.appendChild(texto);//insere À tag

let elementoAnterior = document.querySelector('#titulo-principal');
let elementoPai= document.querySelector('#div1');

elementoPai.insertBefore(novoElemento,elementoAnterior);//insere o primeiro dps do segundo

//inserindo ao final
let hr = document.createElement('hr');
let tag = document.querySelector('#cabecalho')
let tagPai = tag.parentNode;

tagPai.appendChild(hr)


//substitui

let antigo = document.querySelector('#hello-word')
let novo = document.createElement('p');
novo.textContent='NOVO HELLO WORD';
let pai = antigo.parentNode;
pai.replaceChild(novo,antigo)


//inserir texto


let text= document.createTextNode('inseido no p vazio')
let pvazio = document.getElementById('p-sem-texto')

pvazio.appendChild(text)


//teste

let nome=prompt("Qual seu nome?");

let nomeAdd = document.getElementById('titulo-principal');

let textoNome = document.createTextNode('Olá '+nome);
nomeAdd.appendChild(textoNome);