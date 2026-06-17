const botao = document.getElementById("calcularBtn");

botao.addEventListener("click", calcularMedia);

function calcularMedia() {

    const nome = document.getElementById("nome").value;

    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    const resultado = document.getElementById("resultado");

    if (
        nome === "" ||
        isNaN(nota1) ||
        isNaN(nota2) ||
        isNaN(nota3)
    ) {
        resultado.style.display = "block";
        resultado.className = "reprovado";
        resultado.innerHTML = "Preencha todos os campos.";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    resultado.style.display = "block";

    if (media >= 7) {

        resultado.className = "aprovado";

        resultado.innerHTML = `
            <strong>${nome}</strong><br>
            Média: ${media.toFixed(2)}<br>
            Situação: APROVADO ✅
        `;

    } else if (media >= 4) {

        const falta = 10 - media;

        resultado.className = "exame";

        resultado.innerHTML = `
            <strong>${nome}</strong><br>
            Média: ${media.toFixed(2)}<br>
            Situação: EXAME 📝<br>
            Faltam ${falta.toFixed(2)} pontos para atingir 10.00
        `;

    } else {

        resultado.className = "reprovado";

        resultado.innerHTML = `
            <strong>${nome}</strong><br>
            Média: ${media.toFixed(2)}<br>
            Situação: REPROVADO ❌
        `;
    }
}