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
    this.cor=cor,

    this.roncarMotor=function(){
        console.log('ennnneeeennnnnnnnneeeeeeeennnnnnnnnneeeeeee')
    }
}


let prisma=new Carro('VW',4,'Branco')
prisma.roncarMotor()
