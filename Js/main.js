const robotron = document.querySelector("#robotron");
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas);
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



const controle = document.querySelectorAll("[data-controle]");

controle.forEach((element) => {
    element.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle, evento.target.parentNode);
    })
})

function manipulaDados(operacao, controle) {
    const elementoClicado = controle.querySelector("[data-contador]");
    if (operacao === "-") {
            elementoClicado.value = parseInt(elementoClicado.value) - 1;
        }

    } else {
        elementoClicado.value = parseInt(elementoClicado.value) + 1;
    }
}
function atualizaEstatistica(peca, operacao, controle) {
    const elementoClicado = controle.querySelector("[data-contador]");

    if (elementoClicado.value >= 0) {
        estatisticas.forEach((elemento) => {

            if (operacao === "-") {
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
            }
            else {
                elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
            }


        })
    }
    else {
        alert('valor negativo')
    }

}
