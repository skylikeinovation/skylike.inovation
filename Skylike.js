// --- BLOCO 1: DOWNLOAD ---
document.getElementById('btn-download').addEventListener('click', function() {
    const destino = document.getElementById('download-console');
    if (destino) destino.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('btn-vagas').addEventListener('click', function() {
    const destino = document.getElementById('vagas');
    if (destino) destino.scrollIntoView({ behavior: 'smooth' });
});

// --- BLOCO 2: CRÉDITOS ---
document.getElementById('btn-creditos').addEventListener('click', function(event) {
    event.preventDefault();
    const section = document.getElementById('creditos-ul');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
});

// --- BLOCO 3: CANDIDATURA (CORRIGIDO COM ALERT) ---
document.getElementById('btn-candidatar').addEventListener('click', function() {
    const nomeInput = document.getElementById('nome-candidato');
    const nome = nomeInput.value;

    // Se o nome estiver vazio, solta o alert e para a execução
    if (nome === "") {
        alert("digite seu nome primeiro");
        return;
    }

    const email = "skylike.contato@proton.me";
    const assunto = encodeURIComponent("Candidatura Skylike - " + nome);
    const corpo = encodeURIComponent("Olá, meu nome é " + nome + ". Quero participar da Skylike.");

    // Mostra o alert de sucesso antes de abrir o e-mail
    alert("relatório preparado! abrindo sistema de e-mail...");

    // Abre o e-mail direto com os dados do input
    window.location.href = `mailto:${email}?subject=${assunto}&body=${corpo}`;
});

// --- BLOCO 4: SOBRE ---
const btnSobre = document.getElementById('btn-sobre');
if (btnSobre) {
    btnSobre.addEventListener('click', () => {
        const secaoSobre = document.getElementById('sobre');
        if (secaoSobre) secaoSobre.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    // --- BLOCO 5: ESPECIFICAÇÕES ---
}
document.getElementById('especificações1').addEventListener('click', function() {
    const destino = document.getElementById('especificações');
    if (destino) destino.scrollIntoView({ behavior: 'smooth'});
});