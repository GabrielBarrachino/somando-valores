function somar() {
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.querySelector('div#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} + ${n2} é igual a <strong>${s}</strong>`
}

function subtrair() {
    var tn3 = window.document.querySelector('input#txtn3')
    var tn4 = window.document.querySelector('input#txtn4')
    var res2 = window.document.querySelector('div#res2')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var sub = n3 - n4
    res2.innerHTML = `A subtração entre ${n3} - ${n4} é igual a <strong>${sub}</strong>`
}

function multiplicar() {
    var tn5 = window.document.querySelector('input#txtn5')
    var tn6 = window.document.querySelector('input#txtn6')
    var res3 = window.document.querySelector('div#res3')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var s = n5 * n6
    res3.innerHTML = `A multiplicação entre ${n5} x ${n6} é igual a <strong>${s}</strong>`
}

function dividir() {
    var tn7 = window.document.querySelector('input#txtn7')
    var tn8 = window.document.querySelector('input#txtn8')
    var res4 = window.document.querySelector('div#res4')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var s = n7 / n8
    res4.innerHTML = `A divisão entre ${n7} x ${n8} é igual a <strong>${s}</strong>`
}