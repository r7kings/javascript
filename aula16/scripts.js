let n = document.getElementById('num')
let s = document.getElementById('saida')
let r = document.getElementById('res')
let v = []

function isNumber(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    }else {
        return false
    }
}

function inList(num, l) {
    if (l.indexOf(Number(num)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if (isNumber(n.value) && !inList(n.value, v)) {
        v.push(Number(n.value))
        let item = document.createElement('option')
        item.innerText = `Valor ${n.value} adicionado`
        s.appendChild(item)
        r.innerHTML = ''
    }else {
        window.alert('Número inválido ou já adicionado!')
    }
    n.value = ''
    n.focus()
}

function finalizar() {
    if (v.length == 0) {
        window.alert('Adicione valores para continuar!')
    }else {
        r. innerHTML = `<p>Ao todo temos ${v.length} números cadastrados</p>`
        let mai = v[0]
        let men = v[0]
        let som = 0
        for (c = 0; c < v.length; c++) {
            som += v[c]
            if (v[c] > mai) {
                mai = v[c]
            }if (v[c] < men) {
                men = v[c]
            }
        }
        r.innerHTML += `<p>O maior valor informado foi ${mai}</p>`
        r.innerHTML += `<p>O menor valor informado foi ${men}</p>`
        r.innerHTML += `<p>Somando todos os valores temos ${som}</p>`
        r.innerHTML += `<p>A média dos valores digitados é ${som/v.length}</p>`
    }
}


function limpar() {
    r.innerHTML = ''
    s.innerText = ''
    v = []
}