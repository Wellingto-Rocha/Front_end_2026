const img = document.getElementById("main");
const btn = document.getElementById("btn");

const estados = {
    normal: "b_so.png",
    comendo: "b_co.png",
    feliz: "b_fru.png",
    fome30: "b_bravo.png",
    fome60: "b-mor.png" // corrigido aqui
};

let contador = 0;
let intervalo = null;
let timeClick = null;
let timeOut = null;

function initCont(){
    if(intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;
        console.log("Tempo:", contador);

        if(contador == 30){
            img.src = estados.fome30;
        }
        if(contador == 60){
            img.src = estados.fome60;
        }
    }, 1000);
}

initCont();

function alimentar (){
    img.src = estados.comendo;
    contador = 0;
    console.log("comendo");

    if(timeClick) clearTimeout(timeClick);
    if(timeOut) clearTimeout(timeOut); // boa prática adicionar isso

    timeClick = setTimeout(() => {
        img.src = estados.feliz;

        timeOut = setTimeout(() => {
            img.src = estados.normal;
        }, 2000);

    }, 1000);
}