function checarNumeros(valor){
    let tst=Number(valor)
        if(Number.isNaN(tst)){
          //  throw new Error('tem q ser numero')
          return null
        }else{
            return tst
        }
}

function checarBoolean(valor){
        if('boolean'!=typeof(valor)){
            return null
        }else{
            return valor
        }

}


checarNumeros(5)
//5
checarNumeros('teste')
//null
checarNumeros('')
//0
checarNumeros(true)
//1
checarNumeros(12.4)
//12.4


try{
    /*let n=1
    let a = 0
    */
   a=a+n
}catch(e){
    console.log(e)
}finally{
    console.log('rodou')
}