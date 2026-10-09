const amigos = [];

function adicionar() {
    const nome = document.getElementById("nome-amigo").value.trim();

    if (nome === "") {
        alert("Por favor, coloque um nome válido.");
        return;
    }

    amigos.push(nome);

    document.getElementById("lista-amigos").textContent = amigos.join(", ");

    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois participantes.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const escolhido = amigos[indice];

    document.getElementById("lista-sorteio").textContent = escolhido;
}

function reiniciar(evento) {
    evento.preventDefault();

    amigos.length = 0;

    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";

    document.getElementById("nome-amigo").focus();
}
