console.log('1');

//quando passar aqui ele executa dps de 2 segundos
setTimeout(function (){
    console.log('5')
},2000);

console.log('2');
console.log('3');
console.log('4');

let promessa = Promise.resolve(12+3);

promessa.then((valor)=>{console.log('o valor é '+valor)})
        .then((valor)=>{console.log(`valor = ${valor}`)})
//promessa.then((value)=>{console.log(`o valor é ${value}`)})

promessa.then((valor)=>{console.log(valor+5)})


let p = Promise.resolve(new Error('deu pau'))

p.then((value)=>{console.log(value)})
 .catch((reason) => console.log('erro:'+reason));


function retornaNumero(num){
    return new Promise((resolve,reject)=>{
        if(num==2){
              resolve(console.log('O numero é 2'));
        }else{
              reject(new Error('bugou'));
        }
      });
}

retornaNumero(2);
retornaNumero(32);
