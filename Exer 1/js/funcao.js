

function calculo(){
    // botao = document.getElementById('botao').innerHTML
     escolha = parseInt(document.getElementById('escolha').value)
     parseInt(escolha)
 switch(escolha){
 case 1:
 num = parseInt(prompt('digite um numero'))
 
 resultado = Math.sqrt(num)
 document.getElementById('resultado').innerHTML = resultado
 return resultado
 break
 case 2:
 n1 = parseInt(prompt('digite o primeiro numero'))
 n2 = parseInt(prompt('digite o segundo numero'))
 resultado = Math.max(n1,n2)
 document.getElementById('resultado').innerHTML = resultado
 return resultado
 break
 case 3:
 n1 = parseInt(prompt('digite a base '))
 n2 = parseInt(prompt('digite o expoente'))
 ns=n1
 nj=0
 for(x=2;x<=n2;x++){
     ns=ns*n1
     console.log(ns)
 }
 resultado = ns
 document.getElementById('resultado').innerHTML = resultado
 break
 case 4:
 n1 = parseInt(prompt('digite o primeiro numero'))
 n2 = parseInt(prompt('digite o segundo numero'))
 resultado = n1 + n2
 document.getElementById('resultado').innerHTML = resultado
 return resultado
 break
 case 5: 
 frase = prompt('digite uma frase em letras minusculas')
 resultado = frase
 document.getElementById('resultado').innerHTML = resultado.toLocaleUpperCase()
 return resultado
 break
 
 }
 }