let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function calcular() {
    let n = parseInt(document.getElementById('numero').value)

    if (n > 0) {
        div.innerHTML = ''
        for (let i = 0; i <= n; i++) {
            if (i % 2 == 1) {
                div.innerHTML += `<p class="alert alert-danger col-3">${i}</p>`
            }else {
                div.innerHTML += `<p class="alert alert-success col-3">${i}</p>`
            }
        }
    } else {
        div.innerHTML = '<p class="alert alert-danger">O número é menor que zero </p>'
    }
}

btn.addEventListener('click', calcular)