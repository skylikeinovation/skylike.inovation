// Formulário de Candidatura via Mailto funcional
document.getElementById('btn-candidatar').addEventListener('click', function() {
    const nomeInput = document.getElementById('nome-candidato');
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, digite seu nome primeiro.");
        nomeInput.focus();
        return;
    }

    const email = "belbel.skylike@gmail.com";
    const assunto = encodeURIComponent("Candidatura Skylike - " + nome);
    const corpo = encodeURIComponent("Olá,\n\nMeu nome é " + nome + ". Tenho interesse em me juntar à equipe de desenvolvimento da Skylike e colaborar com os projetos.");

    alert("Relatório preparado! Abrindo seu gerenciador de e-mail seguro...");
    window.location.href = `mailto:${email}?subject=${assunto}&body=${corpo}`;
});
