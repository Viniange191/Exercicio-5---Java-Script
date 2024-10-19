function validaCampo(){

    console.log('Funcao');

   
    
}
function calcularMedia(){


    var  nome = document.getElementById("campoNome");
    
    if(nome.value === ''){
        document.getElementById('erro').innerHTML = 'preencher campo Nome'
        nome.focus();
        return false;
    }
    var  nota1 = document.getElementById('campoNota1');
    if( nota1.value === ''){
        document.getElementById('erro').innerHTML = 'preencher campo Nota 1'
        nota1.focus()
        return false
    }
    var  nota2 = document.getElementById('campoNota2');
    if(nota2.value === ''){
        document.getElementById('erro').innerHTML = 'preencher campo Nota 2'
        nota2.focus()
        return false
}
    var  nota3 = document.getElementById('campoNota3')
    if(nota3.value === ''){
        document.getElementById('erro').innerHTML = 'preencher campo Nota 3'
        nota3.focus()
        return false
    }
    var  nota4 = document.getElementById('campoNota4')
    if(nota4.value ===''){
        document.getElementById('erro').innerHTML = 'preencher campo Nota 4'
        nota4.focus()
        return false
    }



    console.log('function calcularMedia()')
  nota1 = parseInt(document.getElementById('campoNota1').value)
  nota2 = parseInt(document.getElementById('campoNota2').value)
  nota3 = parseInt(document.getElementById('campoNota3').value)
  nota4 = parseInt(document.getElementById('campoNota4').value)
  parseInt(media)
    var media = (nota1+nota2+nota3+nota4)/4
    //console.log(media) 
    if(media>=7){
        cor = document.getElementById('situacao')
        cor.style.color = 'green'
        document.getElementById('situacao').innerHTML = 'Aprovado'
        return false
   }else{
    if(media<7 && media>=4){
        cor = document.getElementById('situacao')
        cor.style.color = 'yellow'
     document.getElementById('situacao').innerHTML = 'Exame'
     return false
}else{
if(media<4){
    cor = document.getElementById('situacao')
    cor.style.color = 'red'
     document.getElementById('situacao').innerHTML = 'Reprovado' 
     return false
}
}
 }
}