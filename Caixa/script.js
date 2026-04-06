const produto = {
    "123": { nome: "Coca-Cola Espumante", preco: 9.99 },
    "456": { nome: "Um mamute Pequenino", preco: 8.99 },
    "789": { nome: "Vampiro Doidao", preco: 4.69 },
};

let carrinho = []; // ⬅️ aqui deve ser array

const audio = new Audio("bip.mp3");

window.onload = () => {
    document.getElementById("cod").focus();
};

function addProduto() {
    const codValue = document.getElementById("cod");
    const qtdValue = document.getElementById("qtd");

    const codigo = codValue.value;
    const quantidade = Number(qtdValue.value); // ⬅️ converter para número

    if (!produto[codigo]) {
        alert("Produto não encontrado!"); // ⬅️ corrigido
        return;
    }

    const produtoBase = produto[codigo];

    const item = {
        nome: produtoBase.nome,
        preco: produtoBase.preco,
        quantidade: quantidade,
        subtotal: produtoBase.preco * quantidade
    };

    carrinho.push(item);

    audio.currentTime = 0;
    audio.play();

    atualizarTela();
}

function atualizarTela() {

    const lista = document.getElementById("lista"); 
    lista.innerHTML = "";

    let total = 0; 
    carrinho.forEach((item, index) => { 

        total += item.subtotal;

        const li = document.createElement("li");
        li.className = "list-group-item";

        li.innerHTML = `
            <div class="d-flex justify-content-between">
                <strong>${item.nome}</strong>
                <small>
                    ${item.quantidade} x R$ ${item.preco.toFixed(2)} =
                    <strong>R$ ${item.subtotal.toFixed(2)}</strong>
                </small>
            </div>
        `;

        lista.appendChild(li);
    });

    // atualizar total na tela
    document.getElementById("Total").innerText = total.toFixed(2);
}
