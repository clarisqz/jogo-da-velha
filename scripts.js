
var letra;
var jogada = 0;

function comeca() {
	var modal = document.getElementById('comeca');
	var o = document.getElementsByClassName("o")[0];
	var x = document.getElementsByClassName("x")[0];
	
	modal.style.display = "block";

	o.onclick = function() {
		letra = "O";
    	modal.style.display = "none";
	}

	x.onclick = function() {
		letra = "X";
    	modal.style.display = "none";
	}
}

function jogo(id) {
	clicado = document.getElementById(id).innerHTML;

	if (clicado == "") {
		document.getElementById(id).innerHTML = letra;
		
		if(letra == "X")
			letra = "O";
		else
			letra = "X";

		jogada++;
	}
}

function ganhou() {
	a11 = document.getElementById("a11").innerHTML;
	a12 = document.getElementById("a12").innerHTML;
	a13 = document.getElementById("a13").innerHTML;
	a21 = document.getElementById("a21").innerHTML;
	a22 = document.getElementById("a22").innerHTML;
	a23 = document.getElementById("a23").innerHTML;
	a31 = document.getElementById("a31").innerHTML;
	a32 = document.getElementById("a32").innerHTML;
	a33 = document.getElementById("a33").innerHTML;

	if(a11 == a12 && a11 == a13 && a11 != "")
		mostrarVencedor(a11);	
	else if(a21 == a22 && a21 == a23 && a21 != "")
		mostrarVencedor(a21);
	else if(a31 == a32 && a31 == a33 && a31 != "")
		mostrarVencedor(a31);
	else if(a11 == a21 && a11 == a31 && a11 != "")
		mostrarVencedor(a11);
	else if(a12 == a22 && a12 == a32 && a12 != "")
		mostrarVencedor(a12);
	else if(a13 == a23 && a13 == a33 && a13!= "")
		mostrarVencedor(a13);
	else if(a11 == a22 && a11 == a33 && a11 != "")
		mostrarVencedor(a11);
	else if(a13 == a22 && a13 == a31 && a13 != "")
		mostrarVencedor(a13);
	else if(jogada == 9)
		empate();
}

function mostrarVencedor(a) {
	var modal = document.getElementById('avisoganhou');
	var novo = document.getElementsByClassName("novog")[0];
	var res = document.getElementsByClassName("resg")[0];
	
	document.getElementById("ganhou").innerHTML = a;
	modal.style.display = "block";

	novo.onclick = function() {
		restart();
    	modal.style.display = "none";
    	comeca();
	}

	res.onclick = function() {
		restart();
    	modal.style.display = "none";
	}
}

function empate() {
	var modal = document.getElementById('empate');
	var novo = document.getElementsByClassName("novoe")[0];
	var res = document.getElementsByClassName("rese")[0];
	
	modal.style.display = "block";

	novo.onclick = function() {
		restart();
    	modal.style.display = "none";
    	comeca();
	}

	res.onclick = function() {
		restart();
    	modal.style.display = "none";
	}
}

function restart() {
	var a = "a";

	for (var i = 1; i <= 3; i++)
		for (var j = 1; j <= 3; j++)
			document.getElementById("a" + i + j).innerHTML = "";

	letra = "X";
	jogada = 0;
}
