function proximoGrupo() {

    document.getElementById("grupoA").innerHTML = "🅳 Grupo D";
    document.getElementById("listaA").innerHTML = `
        <li>Estados Unidos</li>
        <li>Paraguai</li>
        <li>Austrália</li>
        <li>Turquia</li>
    `;

    document.querySelectorAll("details p")[0].innerHTML =
        "Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.";

    document.getElementById("grupoB").innerHTML = "🅴 Grupo E";
    document.getElementById("listaB").innerHTML = `
        <li>Alemanha</li>
        <li>Equador</li>
        <li>Costa do Marfim</li>
        <li>Curaçao</li>
    `;

    document.querySelectorAll("details p")[1].innerHTML =
        "Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.";

    document.getElementById("grupoC").innerHTML = "🅵 Grupo F";
    document.getElementById("listaC").innerHTML = `
        <li>Holanda</li>
        <li>Japão</li>
        <li>Tunísia</li>
        <li>Suécia</li>
    `;

    document.querySelectorAll("details p")[2].innerHTML =
        "Holanda e Japão já protagonizaram confrontos importantes. Suécia possui tradição em Copas do Mundo.";
}