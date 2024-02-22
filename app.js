function insert(num) {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML += num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = resultado.innerHTML.slice(0, -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    
    resultado = resultado.replace(/÷/g, '/').replace(/×/g, '*');
    
    
    try {
        var resultadoFinal = eval(resultado);
        document.getElementById('resultado').innerHTML = resultadoFinal;
    } catch (error) {
        document.getElementById('resultado').innerHTML = "Erro";
    }
}