var txt = document.getElementById('texto')
var fun = document.getElementById('fundo')
var agora = new Date()
var hora = agora.getHours()
txt.innerHTML = `<p>Agora são <strong>${hora} horas</strong></p>`
if (hora >= 0 && hora < 12) {
    document.body.style.backgroundColor = 'rgb(197, 146, 197)'
    fun.style.backgroundImage = 'url(imagens/manha.jpg)'
}else if (hora >= 12 && hora < 18) {
    document.body.style.backgroundColor = 'brown'
    fun.style.backgroundImage = 'url(imagens/tarde.jpg)'
}else {
    document.body.style.backgroundColor = 'black'
    fun.style.backgroundImage = 'url(imagens/noite.jpg)'
}