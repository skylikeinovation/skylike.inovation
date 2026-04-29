// Candidatura com validação melhorada
document.getElementById('btn-candidatar').addEventListener('click', function() {
    const nomeInput = document.getElementById('nome-candidato');
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, digite seu nome primeiro");
        nomeInput.focus();
        return;
    }

    const email = "belbel.skylike@gmail.com";
    const assunto = encodeURIComponent("Candidatura Skylike - " + nome);
    const corpo = encodeURIComponent("Olá, meu nome é " + nome + ". Quero participar da Skylike.");

    alert("Relatório preparado! Abrindo sistema de e-mail seguro...");
    window.location.href = `mailto:${email}?subject=${assunto}&body=${corpo}`;
});

