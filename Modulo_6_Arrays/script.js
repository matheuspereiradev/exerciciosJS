let a= [1,2,3,4,1,1,56,6]

console.log(a.length)
console.log(a['length'])


a.push(134)//adiciona o elemnto 134 no final
let removido=a.pop()//remove o ultimo como uma fila
console.log(removido)


a.shift()//remove o primerio elemnto
a.unshift(12)

a.indexOf(1)//ele pega o indice do primiro 1 do array
a.lastIndexOf(1)//ele pega o ultimo indice

a= [1,2,3,4,1,1,56,6]

a.slice(3)//ele pega tds os itens do index 3 pra frente
//a=[4,1,1,56,6]

a.slice(2,5)//ele pega tds os itens do index 3 ate o 4(5-1)
//a=[3,4,1]

let [num1,num2,num3]=a

//num1=a[0]

//-----------------------------------------------------

let nomes=["Ana", "Maria", "Matheus", "Jordania"]

nomes.forEach(
    nm=>{
        console.log("Nome é: "+nm)
    }
);

console.log(nomes.includes("Dolores"))//verifica se o parametro existe no array

nomes.reverse()//inverte o array
//-----------------------------------------------------

//propriedade nome.propriedade
//metodo nome.metodo()

