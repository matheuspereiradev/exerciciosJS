class Mamifero{
    constructor(pata,cor){
        this.patas=pata,
        this.cor=cor
    }
}

class Cachorro extends Mamifero{
    constructor(raca,pata,cor){
        super(pata,cor)
        this.raca=raca
    }
}

class Humano extends Mamifero{
    constructor(nome,pata,cor){
        super(pata,cor)
        this.nome=nome
    }
}


let dog= new Cachorro('Shitzu',4,'caramelo')//Cachorro {patas: 4, cor: "caramelo", raca: "Shitzu"}
let human = new Humano('Matheus',2,'branco')//Humano {patas: 2, cor: "branco", nome: "Matheus"}

dog instanceof Mamifero//true
dog instanceof Cachorro//true
dog instanceof Humano//false