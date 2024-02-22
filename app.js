function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num
}
//isso é para quando eu clicar no número exibir ele no p

function clean(){
    document.getElementById('resultado').innerHTML = ""
}

function back() {
    var resultadoElement = document.getElementById('resultado');
    var resultado = resultadoElement.innerHTML;
    
    // Corrigindo o erro de sintaxe aqui
    resultadoElement.innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else{
        document.getElementById('resultado')
    }
}