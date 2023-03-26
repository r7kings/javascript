function verificar() {
    var hoje = new Date()
    var atual = hoje.getFullYear()
    var ano = document.getElementById('anoN')
    var sex = document.getElementsByName('sexo')
    var res = document.getElementById('res')
    var fun = document.getElementById('fundo')
    if (ano.value.length < 4 ||  ano.value > atual) {
        window.alert('ERRO! Verifique os dados e tente novamente...')
    }else {
        var idade = atual - ano.value
        var gen = ''
        if (sex[0].checked) {
            gen = 'homem'
            if (idade <= 10) {
                fun.style.backgroundImage = 'url(imagens/mcrianca.jpg)'
            } else if (idade <= 50) {
                fun.style.backgroundImage = 'url(imagens/mjovem.jpg)'
            } else {
                fun.style.backgroundImage = 'url(imagens/midoso.jpg)'
            }
        }else {
            gen = 'mulher'
            if (idade <= 10) {
                fun.style.backgroundImage = 'url(imagens/fcrianca.jpg)'
            } else if (idade <= 50) {
                fun.style.backgroundImage = 'url(imagens/fjovem.jpg)'
            } else {
                fun.style.backgroundImage = 'url(imagens/fidoso.jpg)'
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos um ${gen} de ${idade} anos!`
    }
}