function validarCPF() {

    let cpf = document.getElementById("cpf").value;
    let resultado = document.getElementById("resultado");

    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
        resultado.textContent = "CPF Inválido!";
        resultado.className = "invalido";
        return;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        resultado.textContent = "CPF Inválido!";
        resultado.className = "invalido";
        return;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let digito1 = (soma * 10) % 11;

    if (digito1 === 10) {
        digito1 = 0;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    let digito2 = (soma * 10) % 11;

    if (digito2 === 10) {
        digito2 = 0;
    }

    if (
        digito1 === Number(cpf[9]) &&
        digito2 === Number(cpf[10])
    ) {
        resultado.textContent = "✅ CPF Válido!";
        resultado.className = "valido";
    } else {
        resultado.textContent = "❌ CPF Inválido!";
        resultado.className = "invalido";
    }
}