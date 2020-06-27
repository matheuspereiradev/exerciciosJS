let idade=prompt("Qual sua idade?");

if(idade>18){
    alert("pode entrar voce tem "+idade)
}else{
    alert("nao pode entrar voce tem "+idade)
}

while(idade>0){
    console.log(idade);
    idade=idade-1;
}
console.log('exibir inpares ate 8 com break e continue')
for(let i=0;i<10;i++){
    if(i==8){
        break
    }
    if(i%2==0){
       continue
    }
    console.log(i)
}
console.log('exibir impares e pares')
for(let i=0;i<20;i++){
    
    if((i%2)==0){
        console.log('é par')
    }else{
        console.log('é impar');
    }
}