const p = new Promise(function(resolve,reject){
      setTimeout(function(){
            resolve(10);
      },5000);
});

const p2 = Promise.resolve(2);

const p3 = new Promise((resolve)=>{
      resolve(11)
})

Promise.all([p,p2,p3]).then((value)=>{console.log(value)});

async function somar(a,b){
      return a+b;
}

somar(1,4).then(function(valor){
      console.log(valor)
})


function somaConDelay(a,b){
      return new Promise( resolve=>
            setTimeout(function(){
                  resolve(a+b)
            },4000)
      )  
}

async function soma2(a,b,c){
      let x=somaConDelay(a,b);
      let y=c;
      return await x+y;
}

soma2(1,2,3).then((valor)=>console.log(valor))