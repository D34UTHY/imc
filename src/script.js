function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let resultado = document.getElementById("resultado")

    if (peso > 0 && altura > 0) {
        let imc = peso / (altura * altura)
        let indice = ""

        if (imc < 18.5) {
            indice = "Abaixo do peso"
        } else if (imc > 18.5 && imc < 24.99) {
            indice = "Peso normal"
        } else if (imc > 24.99 && imc < 34.99) {
            indice = "Obesidade grau I"
        } else if (imc > 34.99 && imc < 39.99) {
            indice = "Obesidade grau II"
        } else {
            indice = "Obesidade grau III"
        }

        resultado.innerHTML = `<p>Seu IMC é: ${imc.toFixed(1)}</p>
                               <p>Classificação: ${indice}</p>`
    } else {
        resultado.innerHTML = "<p style='color:red;'>Insira valores válidos!</p>"
    }
}