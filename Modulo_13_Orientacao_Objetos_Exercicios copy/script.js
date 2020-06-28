class Carrinho{
    constructor(){

    };

    adicionaAoCarrinho(item){
        this.itens.push(item)
        this.total=this.total+(item.valor*item.qtd)
    }

    removerItem(item){
        if(this.itens.includes(item)){
            this.itens.splice(this.itens.indexOf(item), 1);
            this.total=this.total-(item.valor*item.qtd)
        }else{
            console.log('nao encontrado!')
        }
    }

    verCarrinho(){
        this.itens.forEach(
            item=>{
                console.log('item:'+item.nome+' Valor:'+item.valor+' qntd:'+item.qtd)
            }
        )
        console.log('total: '+this.total)
    }
    
};

Carrinho.prototype.itens=[]
Carrinho.prototype.total=0

let item1={
    nome:'arroz'
   ,valor:10
   ,qtd:4
}

let item2={
    nome:'feijao'
   ,valor:7
   ,qtd:2
}

let item3={
    nome:'Açucar'
   ,valor:3
   ,qtd:1
}

let carro=new Carrinho();
carro.adicionaAoCarrinho(item1)
carro.adicionaAoCarrinho(item2)
carro.adicionaAoCarrinho(item3)



