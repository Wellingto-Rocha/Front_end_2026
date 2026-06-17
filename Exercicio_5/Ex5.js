const input = document.getElementById("nomeConvidado");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaConvidados");

// Array de convidados
let convidados = [];

botao.addEventListener("click", adicionarConvidado);

function adicionarConvidado() {

    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite o nome do convidado.");
        return;
    }

    convidados.push(nome);

    renderizarLista();

    input.value = "";
    input.focus();
}

function renderizarLista() {

    lista.innerHTML = "";

    convidados.forEach((nome, indice) => {

        const li = document.createElement("li");
        li.classList.add("item");

        li.innerHTML = `
            <span class="nome">
                ${nome}
            </span>

            <div class="acoes">

                <button
                    class="btn concluir"
                    onclick="concluirConvidado(this)">
                    ✔ Concluir
                </button>

                <button
                    class="btn editar"
                    onclick="editarConvidado(${indice})">
                    ✏ Editar
                </button>

                <button
                    class="btn excluir"
                    onclick="excluirConvidado(${indice})">
                    🗑 Excluir
                </button>

            </div>
        `;

        lista.appendChild(li);
    });
}

function concluirConvidado(botao) {

    const nome =
        botao.parentElement.previousElementSibling;

    nome.classList.toggle("riscado");
}

function editarConvidado(indice) {

    const novoNome = prompt(
        "Digite o novo nome:",
        convidados[indice]
    );

    if (
        novoNome !== null &&
        novoNome.trim() !== ""
    ) {
        convidados[indice] = novoNome.trim();
        renderizarLista();
    }
}

function excluirConvidado(indice) {

    const confirmar = confirm(
        "Deseja remover este convidado?"
    );

    if (confirmar) {
        convidados.splice(indice, 1);
        renderizarLista();
    }
}