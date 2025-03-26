let div = document.getElementById('resultado')
let btn = document.getElementById('btn')

function parImpar() {
    let numero = parseInt(document.getElementById("numero").value)

    div.innerHTML = (numero % 2 == 0) ? "PAR" : "IMPAR"
}

btn.addEventListener('click', parImpar)