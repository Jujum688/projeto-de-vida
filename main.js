const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempos = [
    new Date(new Date().getTime() + (5 * 30 * 24 * 60 * 60 * 1000)), // CNH (5 meses)
    new Date("2025-12-31T00:00:00"), // Viagem Ano Novo
    new Date("2025-11-09T00:00:00"), // ENEM (data real de 2025 aprox)
    new Date("2026-02-01T00:00:00"), // Conseguir emprego novo
    new Date("2026-01-27T00:00:00"), // Resultado UFPR Psicologia (divulgação resultados vestibular 2026)
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    let totalDias = 0;
    for (let i = 0; i < contadores.length; i++) {
        const [dias, horas, minutos, segundos] = calculaTempo(tempos[i]);
        document.getElementById("dias" + i).textContent = dias;
        document.getElementById("horas" + i).textContent = horas;
        document.getElementById("min" + i).textContent = minutos;
        document.getElementById("seg" + i).textContent = segundos;
        totalDias += dias;
    }
    document.getElementById("total-dias").textContent = totalDias;
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();

// Funcionalidade dos botões de zoom
let tamanhoFonte = 100; // Porcentagem base

const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');

zoomIn.addEventListener('click', function() {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + '%';
    }
});

zoomOut.addEventListener('click', function() {
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + '%';
    }
});