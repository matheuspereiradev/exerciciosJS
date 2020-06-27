
//=====================================objeto============================================================

let pessoa={
    nome:"Matheus",
    profissao: "Testador",
    idade: 22,

    escrever:function(){
        console.log("Teste")
    }

}

//
let carro={
    marca:"Chevrolet",
    motor:1.0,
    cor:"Branco"
}

console.log(carro);

delete carro.marca;//retira a propriedade marca
console.log(carro);
carro.ano=2020;//adicona a propriedade ano
console.log(carro);


let cachorro1={
    nome:'apollo',
    idade:8
}

let cachorro2={
    cor:'Caramelo',
    caracteristica:'dando'
}

Object.assign(cachorro1,cachorro2);//copia para o primeiro obj tudo q esta no segundo

console.log(Object.keys(cachorro1))//mostra as chaves nome das propriedades ex [nome,idade,cor]

//MTAÇAO

let pess={
    nome:"Matheus",
    sobrenome:"Lima"
}

let pess2=pess;

let pess3={
    nome:"Matheus",
    sobrenome:"Lima"
}

//mesmo com os mesmos atributos o 3 nao é igual aos primeiro pois os 2 primeiros
// apontam ao mesmo endereço de memoria se você alterar pess e pess2 as propriedades sao alteradas em ambos
/*pess==pess2
pess!=pess3
pess2!=pess3*/

//ex

pess.nome="Antonio"

console.log(pess2.nome)//'antonio'



let objt={
    nome:"Matheus",
    idade:22,
    time:"Santos"
}


let {nome:vNome, idade:vIdade, time:vTime}= objt

