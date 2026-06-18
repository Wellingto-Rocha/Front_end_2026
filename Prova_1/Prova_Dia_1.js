function mostrarImagem() {

    const container = document.getElementById("imagemContainer");

    if (container.innerHTML === "") {

        const imagem = document.createElement("img");

        imagem.src = "img/tabela_jogos.jpg";
        imagem.alt = "Tabela de Jogos da Copa do Mundo";

        container.appendChild(imagem);
    }
}