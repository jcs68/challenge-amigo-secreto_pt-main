// Inicializando a lista com nomes
let amigosSecretos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigoSecreto = amigoInput.value.trim();

    if (amigoSecreto === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigosSecretos.push(amigoSecreto);
    atualizarLista();
    amigoInput.value = "";
}

// Função para atualizar a lista de amigos exibida
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let amigoSecreto of amigosSecretos) {
        const li = document.createElement("li");
        li.textContent = amigoSecreto;
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigosSecretos.length === 0) {
        alert("A lista de nomes está vazia. Adicione pelo menos um nome.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigosSecretos.length);
    const amigoSorteado = amigosSecretos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li>Amigo Secreto: ${amigoSorteado}</li>`;
}

// Atualizar a lista inicial ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarLista);
