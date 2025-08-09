// let titulo = document.querySelector("h1");
//titulo.innerHTML = "Escolha o numero secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha entre 1 a 10"
let listaNumeroSorteado = []
let limiteDeEspaco = 30;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function nomeNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
          mensagemTentativas = tentativas > 1 ? ' tentativas!' : ' tentativa!'
          nomeNatela('h1', 'Você acertou!');
          nomeNatela('p', 'Parabéns, você acertou com ' + tentativas + mensagemTentativas);
          document.getElementById('reiniciar').removeAttribute('disabled');

       } else {
          if ( chute > numeroSecreto) {
              nomeNatela('p',"O chute é MAIOR que o número secreto!");
              } else {
              nomeNatela('p',"O chute é MENOR que o número secreto!");
              tentativas++
              limparCampo()
         }
       }
        
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() *limiteDeEspaco +1);
   if (numeroEscolhido == limiteDeEspaco){
     listaNumeroSorteado = []
   }
   if (listaNumeroSorteado.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio(); 
   } else {
      listaNumeroSorteado.push(numeroEscolhido)
      console.log(listaNumeroSorteado)
      return numeroEscolhido;
   }
}

function limparCampo () {
            chute = document.querySelector('input');
          chute.value = ""
}
function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled', true)
}

function mensagemInicial(){
    nomeNatela('h1', 'Qual o número secreto?');
    nomeNatela('p', 'Escolha entre 1 a ' + limiteDeEspaco);
}