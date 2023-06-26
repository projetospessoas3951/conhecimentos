const lista = {
    "python":"/python.html",
    "pithon":"/python.html"
}
function buscar() {
    console.log(123)
    frase = window.document.getElementById('Texto').value
    console.log(frase)
    if(lista[frase]) {
        window.location.href = `https://www.projetospessoas3951.github.io/conhecimento/${lista[frase]}`
    }
    else{
        window.alert('não encontramos esse valor')
    }
}
