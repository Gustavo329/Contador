var ini = document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById(`res`)
function contar() {
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
         res.innerHTML = `Impossível contar!`
         //alert (`[ERRO] Está faltando algum dos dados necessários.`)
       
    } else {
        res.innerHTML =  `Contando:`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert(`Passo inválido. Considerando PASSO 1`)
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        } else {
            // Contagem Regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }

}