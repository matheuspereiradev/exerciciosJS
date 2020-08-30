console.log(document)

console.log(document.body)

document.body.childNodes[1].childNodes[1].innerText='TEXTOCOLOCADOAARTIRDOJS'
//altera o titulo para jajaja

console.log(document.getElementsByTagName('h1'))

console.log(document.getElementsByTagName('li'))

console.log(document.getElementById('titulo-principal'))

console.log(document.getElementsByClassName('pensadores'))

console.log(document.getElementsByClassName('pessoas'))

console.log(document.querySelector('#div1'))//id

console.log(document.querySelector('#div1 h1'))//id dadivprincipaldentro dele o h1

console.log(document.querySelector('.pessoas'))//classes

console.log(document.querySelectorAll('.animais'))
/*NodeList(3) [li.animais, li.animais, li.animais]
0: li.animais
1: li.animais
2: li.animais
length: 3
__proto__: NodeList
*/