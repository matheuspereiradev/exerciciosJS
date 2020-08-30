let {readFile,writeFile}= require('fs')

readFile("arquivo.txt","utf8",(error,texto)=>{
    if (error) {
        throw error;
    } else{
        console.log(texto)
    }
})

writeFile("arquivo.txt", "TEXTOOOOO", function(erro){
    if(erro){
        throw erro;
    }else{
        console.log('executado com sucesso')
    }
})