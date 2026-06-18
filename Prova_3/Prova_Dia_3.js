function mostrarImagem() {

    const container = document.getElementById("imagemContainer");

    if (container.innerHTML === "") {

        const imagem = document.createElement("img");

        imagem.src = "Tabela_Jogos.jpg";
        imagem.alt = "Tabela de Jogos da Copa";

        container.appendChild(imagem);
    }
}