const botao = document.getElementById("calcularBtn");

botao.addEventListener("click", calcularVenda);

function calcularVenda() {

    const bandeira = document.getElementById("bandeira").value;
    const valorVenda = Number(document.getElementById("valor").value);
    const parcelas = Number(document.getElementById("parcelas").value);

    const resultado = document.getElementById("resultado");

    if (
        bandeira === "" ||
        valorVenda <= 0 ||
        parcelas <= 0
    ) {
        resultado.style.display = "block";
        resultado.innerHTML = "⚠️ Preencha todos os campos corretamente.";
        return;
    }

    let percentualTaxa = 0;

    switch (bandeira) {

        case "visa":
            percentualTaxa = 0.02;
            break;

        case "master":
            percentualTaxa = 0.0185;
            break;

        case "elo":
            percentualTaxa = 0.03;
            break;

        default:
            percentualTaxa = 0;
    }

    // Taxa da bandeira
    const taxaBandeira = valorVenda * percentualTaxa;

    // Juros simples
    const juros = valorVenda * (0.0035 * parcelas);

    // Taxa mensal fixa
    const taxaMensal = 12.50 * parcelas;

    // Total
    const valorTotal =
        valorVenda +
        taxaBandeira +
        juros +
        taxaMensal;

    const valorParcela =
        valorTotal / parcelas;

    resultado.style.display = "block";

    resultado.innerHTML = `
        <h3>📊 Resumo da Venda</h3>

        <strong>Bandeira:</strong> ${bandeira.toUpperCase()}<br>

        <strong>Valor da Venda:</strong>
        R$ ${valorVenda.toFixed(2)}<br>

        <strong>Taxa da Bandeira:</strong>
        R$ ${taxaBandeira.toFixed(2)}<br>

        <strong>Juros Totais:</strong>
        R$ ${juros.toFixed(2)}<br>

        <strong>Taxa Mensal:</strong>
        R$ ${taxaMensal.toFixed(2)}<br>

        <strong>Valor Total:</strong>
        R$ ${valorTotal.toFixed(2)}<br>

        <strong>Parcelas (${parcelas}x):</strong>
        R$ ${valorParcela.toFixed(2)}
    `;
}