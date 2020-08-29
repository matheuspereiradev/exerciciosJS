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