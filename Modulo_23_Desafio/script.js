let tabela  = document.querySelector('#tabela')
let item = document.querySelector('#item')
let quantidade = document.querySelector('#qnt')
let test = document.querySelector('#test')
let btnenviar = document.querySelector('#enviar')
let alerta = document.querySelector('#alerta-de-erro');


btnenviar.addEventListener('click', function(e){
    if(verificaInconsistenciaInputs()){
        let quantidadeAdc = document.createElement('td')
        let itemAdc = document.createElement('td')
     
        quantidadeAdc.appendChild(document.createTextNode(quantidade.value))
        itemAdc.appendChild(document.createTextNode(item.value))
     
        let linha = document.createElement('tr')
     
        linha.appendChild(itemAdc)
        linha.appendChild(quantidadeAdc)
        
        
        tabela.appendChild(linha)

        item.value=""
        quantidade.value=""
     }    
})

function verificaInconsistenciaInputs(){
    let regexQnt = /\D/
    let regexProduto = /\d/

    if (regexProduto.test(item.value)){
        alert('NAO DIGITE NUMEROS NO NOME DO PRODUTO')
        return false;
    }
    if(regexQnt.test(quantidade.value)){
        alert('existem caracteres que nao sao numeros')
        return false;
        
    }
    return true;
}

let link = document.querySelector('#link')
let subLink = document.querySelector('#subLink')
let linkIr = document.querySelector('#linkIr')

subLink.addEventListener('click',function(e){
    let texto = link.value
    linkIr.setAttribute('href',texto)
    alert(linkIr.getAttribute('href'))
})

let dvm = document.getElementById('div-marrom')

dvm.offsetHeight
//34 ALTIRA CONSIDERANDO A BORDA
dvm.offsetWidth
//892 LARGURA CONSIDERANDO A BORDA
dvm.clientHeight
//24 ALTIRA DESCONSIDERANDO A BORDA
dvm.clientWidth
//882 LARGURA DESCONSIDERANDO A BORDA

dvm.getBoundingClientRect()
//bottom: 88.33333587646484
//height: 30
//left: 65.03125
//right: 253.6979217529297
//top: 58.333335876464844
//width: 188.6666717529297
//x: 65.03125
//y: 58.333335876464844

//mudar css
setTimeout(function(){
    dvm.style.background='green'

    dvm.style.color='white'

    dvm.style.fontSize='30px'
},1000)


let mudaCor = document.getElementById('btnMudaCor')
let titulo = document.querySelector('#titulo')
function evento(){
    titulo.style.color='blue'
    if(dvm.style.background=='gray'){
        dvm.style.background='yellow'
    }else if(dvm.style.background=='yellow'){
        dvm.style.background='gray'
    }else{
        dvm.style.background='yellow'
    }
    
}
mudaCor.addEventListener('click',evento)


let btnMudaCorDes = document.getElementById('btnMudaCorDes')

btnMudaCorDes.addEventListener('click',(objEvento)=>{
    console.log(objEvento)
    console.log('clicou no botao')
    objEvento.stopPropagation;//RESOLVE O PROBLEMA
    //existe um problem  que quando clica no botao ele registra o click da div e do botao
    mudaCor.removeEventListener('click',evento);
})

let divDoBotao=document.getElementById('div-do-botao');

divDoBotao.addEventListener('click',function (){
    console.log('clicou na div')
})

