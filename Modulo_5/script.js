function escreverNoConsole(){
    console.log('eis o texto')
}

const funcNaConst= function(){
    console.log('eis o texto 2')
}

const funcComParam= function(nome){
    console.log('o nome é'+nome)
}

const somar=function(num1,num2){
    return num1+num2;
}

escreverNoConsole();
funcNaConst();
funcComParam("Matheus");

console.log(somar(1,7))


////////////////////////ESCOPO//////////////////////////////

let y=10
let x=123
function imprimir(){
    let y=2//pq declarei 2 vezes mas se tira o let ele altera o valor
    if(true){
        let y=1
        console.log("Dentro do if y "+y)
    }

    console.log("Dentro da funcao y "+y)
}
function imprimir2(){
    x=98
    console.log("Dentro da funcao x "+x)
}


imprimir();
console.log("Escopo global y "+y)
imprimir2();
console.log("Escopo global x "+x)
/////////////////////////ARROW FUNCTION////////////


const parOuImpar=(n)=>{
    if((n%2)==0){
        return n+" é par";
    }
    else{
        return n+" é impar";
    }
};

console.log(parOuImpar(7));
console.log(parOuImpar(2));
//reduzinda
const raizQuadrada =(x)=> Math.sqrt(x)

console.log(raizQuadrada(25))


///////////////parametros opcionais

function teste(nome,email){

    if(email===undefined){
        console.log('voce nao digitou o email '+nome)
    }else{
        console.log(nome+': email::::'+email)
    }

}

teste('matheus', 'matheus@matheus.com')
teste('jordania')
//parametro default
function pessoa(nome,nacionalidade='brasileiro'){
    console.log('Nome: '+nome+"nacionalidade: "+nacionalidade)
}

pessoa('Juan',"chileno")
pessoa('matheus')
//clousure

function criaFunc() {
    var nome = "Mozilla";
    function exibirNome() {
      alert(nome);
    }
    return exibirNome;
  }
  
  var funcaoClausure = criaFunc();
  funcaoClausure();


//recursão
let rec=10
function incrementar(){
    rec--
    console.log('Recursao'+rec);
    if(rec!=0){
        incrementar();
    }
}

incrementar();

//////////////////////////////



function verificarDado(valor){
    alert(typeof(valor))
}

verificarDado(12);
verificarDado(12.2);
verificarDado('12');
verificarDado(true);


let array;

function imprimirNum(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i])
    }

    array=args;
    
}

imprimirNum(1,54,232,2324,556,113);
//array=[1, 54, 232, 2324, 556, 113]