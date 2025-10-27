let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const input = document.getElementById("input");
const enviarBtn = document.getElementById("enviar");
const mensagem = document.getElementById("mensagem");
const reiniciarBtn = document.getElementById("reiniciar");

function verificarPalpite() {
    let palpite = Number(input.value); // pega o número do jogador
    tentativas++;

    if (palpite < numeroSecreto) {
        mensagem.innerText = "O número é maior! 🔼";
    } else if (palpite > numeroSecreto) {
        mensagem.innerText = "O número é menor! 🔽";
    } else {
        mensagem.innerText = `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;
    }
}

enviarBtn.addEventListener("click", verificarPalpite);

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    mensagem.innerText = "Jogo reiniciado! Boa sorte! 🍀";
    input.value = "";
}

reiniciarBtn.addEventListener("click", reiniciarJogo);
