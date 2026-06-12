const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('statusMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Simula envio
    statusMessage.textContent = "Enviando...";
    setTimeout(() => {
        statusMessage.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        form.reset();
    }, 1000);
});
