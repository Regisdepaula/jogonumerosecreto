let listaDeNumerosSorteados=[];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto)

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.5})

}
function exibirmensagemInicial(){
    exibirTextoNaTela('h1' , 'Jogo Acerte o número!');
    exibirTextoNaTela('p' , 'Escolha um numero entre 1 e 100');
    
}
exibirmensagemInicial();
let tentativas = 1;

function verificarChute(){
  
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto) ;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1' , `Você acertou!`);
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Descobriu o número secreto com ${tentativas} ${palavratentativa}.`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('p' , 'O número secreto é maior');
        }else{
            (chute > numeroSecreto)
            exibirTextoNaTela('p' , 'O número secreto é menor');
        }

        tentativas++
        limparCampo();{

        }
       
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeelementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeelementosNaLista == numeroLimite){
        listaDeNumerosSorteados=[]
        
    }
    

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
        
     
    } 
    
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirmensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled',true);
    

}
