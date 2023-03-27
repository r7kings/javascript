function contar() {
    var ini = document.getElementById('ini').value
    var fim = document.getElementById('fim').value
    var pas = document.getElementById('pas').value
    var r = document.getElementById('res')
    if (ini.length == 0 || fim.lenght == 0 || pas.lenght == 0){
        window.alert('ERRO! faltam dados...')
    }else {
        r.innerHTML = `<p>Contando...</p><br>`
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(pas)
        if (p <= 0){
            window.alert('Passo invalido, considerando passo 1')
            p = 1
        }
        if (i < f){
            for (var c = i; c <= f; c+=p) {
                r.innerText += `${c} -> `
            }
        }else {
            for (var c = i; c >= f; c-=p) {
                r.innerText += `${c} -> `
            }
        }
    }     
}