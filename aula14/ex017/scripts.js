function tabuada() {
    var n = document.getElementById('num').value
    var t = document.getElementById('tabuada')
    if (n.length == 0){
        window.alert('Por favor, digite um número')
    }else{
        t.innerHTML = ''
        for(c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.innerText = `${n} x ${c} = ${n*c}`
            t.appendChild(item)
        }
    }
}