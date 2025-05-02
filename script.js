function mostrarMensagem(){
    const mensagem = document.getElementById("mensagem");
if (mensagem.style.display == "block") {
    mensagem.style.display = 'none'
} else {
    mensagem.textContent = "Olá, bem vindos o site da aula de Fundamentos de Software!. Você é capaz de alcançar qualquer objetivo!."
    mensagem.style.display = "block"
}
}