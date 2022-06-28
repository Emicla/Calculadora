let visor = document.querySelector(".visor");
let divTabuada = document.querySelector(".div-tabuada");
let tabuada = document.getElementById("tabuada");
let tituloTabuada = document.getElementById("numero-tabuada");
let num1 = "";
let num2 = "";
let operador = "+";
let escolheuNum1 = false;

function digita(valor) {
    var tela = visor.textContent;
    var teclaClicada = valor.textContent;

    if (escolheuNum1 && teclaClicada != "+" && teclaClicada != "-" && teclaClicada != "x" && teclaClicada != "/") {
        visor.innerHTML += valor.textContent;

    } else if (escolheuNum1 == false && String(parseInt(num1)) == "NaN" && tela.length > 0) {
        num1 = "0"
        visor.innerHTML = num1 + valor.textContent;

    } else if (escolheuNum1 == false) {
        visor.innerHTML += valor.textContent;
    }
}

function addNumero(numero) {
    if (escolheuNum1) {
        num2 += numero.textContent;
    } else {
        num1 += numero.textContent;
    }
}

function selecOperacao(operacao) {
    if (escolheuNum1 == false) {
        operador = operacao.textContent;
        escolheuNum1 = true;
    }
}

function apagarLetra() {
    if (escolheuNum1 == false) {
        visor.textContent = visor.textContent.substring(0, visor.textContent.length - 1);
        num1 = num1.substring(0, num1.length - 1);

    } else if (escolheuNum1 && num2 != "") {
        num2 = num2.substring(0, num2.length - 1);
        visor.textContent = num1 + operador + num2;
    }
}

function apagarTudo() {
    visor.innerHTML = "";

    operador = "+";
    num1 = "";
    num2 = "";
    escolheuNum1 = false;
}

function calcula() {
    let resultado;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operador == "+") {
        resultado = num1 + num2;

    } else if (operador == "-") {
        resultado = num1 - num2;

    } else if (operador == "x") {
        resultado = num1 * num2;

    } else if (operador == "/") {
        resultado = num1 / num2;

    }

    if (isNaN(resultado)) {
        resultado = 0;

    } else if (parseInt(resultado) != parseFloat(resultado)) {
        resultado = resultado.toFixed(2);
    }

    visor.textContent = resultado;
    num2 = "";
    num1 = resultado.toString();
    operador = "+";
    escolheuNum1 = false;
}

function calcTabuada() {
    tabuada.innerHTML = "";
    divTabuada.classList.remove("display-none");
    tituloTabuada.innerHTML = "Tabuada do " + num1;
    if (escolheuNum1 == false && num1 != "") {
        for (var i = 0; i <= 10; i++) {
            tabuada.innerHTML += "<li>" + num1 + " x " + i + " = " + (num1 * i) + "</li>";
        }
    } else {
        divTabuada.classList.add("display-none");
    }
}