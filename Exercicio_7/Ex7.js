const botao = document.getElementById("analisarBtn");

botao.addEventListener("click", analisarCartao);

function analisarCartao() {

    let numero =
        document.getElementById("cartao").value;

    const painel =
        document.getElementById("painel");

    numero = numero.replace(/\D/g, "");

    if (
        numero.length < 13 ||
        numero.length > 16
    ) {
        mostrarErro(
            "Número deve possuir entre 13 e 16 dígitos."
        );
        return;
    }

    const valido = validarLuhn(numero);

    const bandeira = identificarBandeira(numero);

    const setor = identificarSetor(numero);

    const banco = identificarBanco(numero);

    painel.style.display = "block";

    painel.className = valido
        ? "valido"
        : "invalido";

    painel.innerHTML = `
        <h3>📋 Painel de Informações</h3>

        <strong>Status:</strong>
        <span class="${
            valido
            ? "status-ok"
            : "status-erro"
        }">
            ${
                valido
                ? "Cartão Válido ✅"
                : "Cartão Inválido ❌"
            }
        </span>

        <br>

        <strong>Bandeira:</strong>
        ${bandeira}

        <br>

        <strong>Categoria de Setor:</strong>
        ${setor}

        <br>

        <strong>Banco Emissor:</strong>
        ${banco}

        <br>

        <strong>IIN:</strong>
        ${numero.substring(0,8)}
    `;
}

function mostrarErro(msg){

    const painel =
        document.getElementById("painel");

    painel.style.display = "block";
    painel.className = "invalido";

    painel.innerHTML = msg;
}

/* ==========================
   ALGORITMO DE LUHN
========================== */
function validarLuhn(numero){

    let soma = 0;
    let dobrar = false;

    for(
        let i = numero.length - 1;
        i >= 0;
        i--
    ){

        let digito =
            parseInt(numero.charAt(i));

        if(dobrar){

            digito *= 2;

            if(digito > 9){
                digito -= 9;
            }
        }

        soma += digito;

        dobrar = !dobrar;
    }

    return soma % 10 === 0;
}

/* ==========================
   BANDEIRA
========================== */
function identificarBandeira(numero){

    if(/^4/.test(numero))
        return "Visa";

    if(/^5[1-5]/.test(numero))
        return "MasterCard";

    if(/^3[47]/.test(numero))
        return "American Express";

    if(/^6(?:011|5)/.test(numero))
        return "Discover";

    return "Desconhecida";
}

/* ==========================
   SETOR INDUSTRIAL (MII)
========================== */
function identificarSetor(numero){

    switch(numero.charAt(0)){

        case "1":
            return "Companhias Aéreas";

        case "2":
            return "Linhas Aéreas e Financeiro";

        case "3":
            return "Viagens e Entretenimento";

        case "4":
        case "5":
            return "Instituições Financeiras";

        case "6":
            return "Comércio e Bancário";

        case "7":
            return "Petróleo e Transporte";

        case "8":
            return "Telecomunicações";

        case "9":
            return "Órgãos Governamentais";

        default:
            return "Não Identificado";
    }
}

/* ==========================
   BANCO EMISSOR
========================== */
function identificarBanco(numero){

    const bin = numero.substring(0,6);

    if(bin.startsWith("411111"))
        return "Banco Visa Test";

    if(bin.startsWith("555555"))
        return "Banco Master Test";

    if(bin.startsWith("378282"))
        return "American Express";

    return "Banco não catalogado";
}