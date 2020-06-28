const cachorro={

    nome:'',
    raca:'',

    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome=nome
    },

    getRaca:function(){
        return raca
    },

    setRaca:function(raca){
        this.raca=raca
    }
}

//prototype
//Object->cachorro->cachorro2

let cachorro2 = Object.create(cachorro)//instanciaçao mais simples de tds
let cachorro3 = Object.create(cachorro)

cachorro2.getNome();//''
cachorro3.getNome();//''

cachorro2.setNome('apollo');

cachorro2.getNome();//'apollo'
cachorro3.getNome();//''

console.log(Object.getPrototypeOf(cachorro2)===cachorro)//todos os prototype terao comuns atributos e metodos

//CONTRUTOR POR FUNCTION
function criarMoto(marca,cor){
    let moto = Object.create({})
    moto.cor=cor
    moto.marca=marca

    moto.acelerar=function(){
        console.log('vru vruuuummm')
    }

    return moto
}


let motoca = criarMoto('Honda','Azul')

//POR NEW

function Carro(marca,rodas,cor){
    this.marca=marca,
    this.rodas=rodas,
    this.cor=cor
}
//classe fica com as propriedades
//metodos sao definidos e atrelados ao prototype
Carro.prototype.roncarMotor=function(){
    console.log('ennnneeeennnnnnnnneeeeeeeennnnnnnnnneeeeeee')
};

let prisma=new Carro('VW',4,'Branco')
prisma.roncarMotor()


//VIA ES6

class Pessoa{
    constructor(nome,idade){
        this.nome=nome,
        this.idade=idade
    }

    falar=function(){
        console.log("oi eu sou "+this.nome)
    }

    get pegarNome(){
        return this.nome
    }

    set setNome(nm){
        this.nome=nm
    }

}

//alterar no protype o valor padrao
Pessoa.prototype.nome='SEM NOME'
Pessoa.prototype.idade=0

let person=new Pessoa('Matheus',22)

console.log(person.nome+"-"+person.idade)//imprime matheus 22

console.log(Pessoa.prototype)//imprime o protoipo padrao 

//PRECISO SABER A QNT DE PERNAS TD MUNDO TEM 2 ENTAO ADICIONO ISSO AO PROTYPE PESSOAPRA NAO TER QPASSAR
Pessoa.prototype.pernas=2

//adicionando constante

let especie=Symbol();

Pessoa.prototype[especie]='humano'

person.setNome='marcos';

//isso so pode ser acessado pelo prototype Pessoa.prototype[especie]