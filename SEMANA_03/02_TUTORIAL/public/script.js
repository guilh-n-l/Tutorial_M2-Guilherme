/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
var x
var y
function calcula(){
	x = parseFloat(document.getElementById("first").value);
	y = parseFloat(document.getElementById("second").value);
	var op = document.getElementById("Operation").value;
	var resultado;
	switch(op){
		case "+":
			resultado = x+y;
			document.getElementById("saida").innerHTML = `${x} ${op} ${y} = ${resultado}`;
			break;
		case "-":
			resultado = x-y;
			document.getElementById("saida").innerHTML = `${x} ${op} ${y} = ${resultado}`;
			break;
		case "*":
			resultado = x*y;
			document.getElementById("saida").innerHTML = `${x} ${op} ${y} = ${resultado}`;
			break;
		case "/":
			resultado = x/y;
			document.getElementById("saida").innerHTML = `${x} ${op} ${y} = ${resultado}`;
			break;
	}
}
