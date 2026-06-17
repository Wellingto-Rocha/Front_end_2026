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
}const botao = document.getElementById("calcularBtn");

botao.addEventListener("click", calcularOrcamento);

function calcularOrcamento() {

    const pacote = Number(
        document.getElementById("pacote").value
    );

    const pessoas = Number(
        document.getElementById("pessoas").value
    );

    const resultado =
        document.getElementById("resultado");

    if (pacote === 0 || pessoas <= 0) {

        resultado.style.display = "block";

        resultado.innerHTML =
            "⚠️ Preencha todos os campos corretamente.";

        return;
    }

    // 1. Cálculo Base
    const custoBruto = pacote * pessoas;

    // 2. Taxa de Serviço (10%)
    const taxaServico = custoBruto * 0.10;

    const subtotal =
        custoBruto + taxaServico;

    // 3. Desconto para mais de 100 convidados
    let desconto = 0;

    if (pessoas > 100) {
        desconto = subtotal * 0.05;
    }

    const totalFinal =
        subtotal - desconto;

    resultado.style.display = "block";

    resultado.innerHTML = `
        <h3>📋 Resumo do Orçamento</h3>

        <strong>Custo Bruto:</strong>
        R$ ${custoBruto.toFixed(2)}
        <br>

        <strong>Taxa de Serviço (10%):</strong>
        R$ ${taxaServico.toFixed(2)}
        <br>

        <strong>Desconto Aplicado:</strong>
        R$ ${desconto.toFixed(2)}
        <br>

        <hr style="margin:15px 0;">

        <div class="total">
            Total Final: R$ ${totalFinal.toFixed(2)}
        </div>
    `;
}