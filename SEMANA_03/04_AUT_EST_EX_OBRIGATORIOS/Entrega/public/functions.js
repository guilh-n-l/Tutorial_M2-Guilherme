/* Lançamento Vertical */

const g = 10;

// Roda as funções de lançamento vertical
function vertical(v){
    maxHeight(v);
    timeUp(v);
}

// Calcula a altura máxima que a particula pode alcançar
function maxHeight(v){
    var hMax = Math.pow(v, 2)/(2*g);
    document.getElementById('altMax').innerHTML = `A altura máxima que essa partícula alcançará será: ${hMax}m`;
}

// Calcula o tempo de subida de uma particula a partir da velocidade inicial
function timeUp(v){
    var tUp = v/g;
    document.getElementById("timeUp").innerHTML = `O tempo de subida dessa partícula será: ${tUp}s`;
}



/* Ponto de Máximo e Mínimo */

// Roda as funções da parábola
function parable(a, b, c){
    dotX(a, b);
    dotY(a, b, c);
}

// Calcula o Xv da função
function dotX(a, b){
    if(a != 0){
        var xV = (-b)/(2*a);
        document.getElementById("XVertix").innerHTML = `O x do vértice vale: ${xV}`;
    }
    else{
        document.getElementById("XVertix").innerHTML = "'a' deve ser diferente de zero";
    }
}

// Calcula o Yv da função
function dotY(a, b, c){
    if(a != 0){
        var delta = Math.pow(b, 2)+(-4*a*c);
        var yV = (-delta)/(4*a);
        document.getElementById("YVertix").innerHTML = `O y do vértice vale: ${yV}`
    }
    else{
        document.getElementById("YVertix").innerHTML = "";
    }
}



/* Temperatura */

// Converte de celcius para fahrenheit e vice-versa
function convertTemp(t, s){
    switch(s){
        case "celsius":
            var temp = ((9*t)/5)+32;
            document.getElementById("tempFinal").innerHTML = `A Temperatura convertida é: ${temp}°F`;
            break;
        case "fahrenheit":
            var temp = (5*(t-32))/9;
            document.getElementById("tempFinal").innerHTML = `A Temperatura convertida é: ${temp}°C`;
            break;
    }
}

/*  Consumo de energia */

// Transforma a quantidade de energia e o valor unitário em gasto
function consumption(e, v){
    if(100<e && e<=200){
        v = v*1.25;
    }
    else if(e>200){
        v = v*1.5;
    }
    var pay = e*v;
    document.getElementById("valFinal").innerHTML = `O valor gasto foi: R$${pay}`;
}


