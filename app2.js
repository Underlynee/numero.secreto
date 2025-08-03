

function media(valor1, valor2, valor3) {
let soma = parseInt (valor1 + valor2 + valor3)/3;
    return parseInt(alert("A média dos 3 números é: " + soma ));
    
}

let numero1 = parseInt(prompt("Me diga um numero para eu dobrar!"));
let numero2 = parseInt(prompt("Me diga um numero para eu dobrar!"));
let numero3 = parseInt(prompt("Me diga um numero para eu dobrar!"));

let resultado = media(numero1, numero2, numero3);
alert("A média é " + resultado);