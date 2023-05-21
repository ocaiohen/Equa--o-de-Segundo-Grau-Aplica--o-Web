const inputA = document.getElementById("input-a")
const inputB = document.getElementById("input-b")
const inputC = document.getElementById("input-c")
const botaoResolver = document.getElementById("botao-resolver")
const resultadoX1 = document.getElementById("resultado-x1")
const resultadoX2 = document.getElementById("resultado-x2")

const resolverEquacao = () =>{
    const valorA = parseFloat(inputA.value)
    const valorB = parseFloat(inputB.value)
    const valorC = parseFloat(inputC.value)
    console.log(valorA,valorB,valorC)
    if(valorA != 0){
        const delta = valorB * valorB - 4 * valorA * valorC
        if(delta < 0){
            resultadoX1.innerHTML = "A equação não tem raízes reais!"
            resultadoX2.innerHTML = ""
        }
        else{
            console.log(delta)
            const x1 = (-1 * valorB + Math.sqrt(delta, 2)) / (2 * valorA)
            const x2 = (-1 * valorB - Math.sqrt(delta, 2)) / (2 * valorA)
            resultadoX1.innerHTML = `x1 = ${x1}`
            resultadoX2.innerHTML = `x2 = ${x2}`
        }   
    }
    else{
        resultadoX1.innerHTML = "Se o coeficiente a é igual a 0, não é uma equação de segundo grau!"
        resultadoX2.innerHTML = ""
    }
}

botaoResolver.onclick = resolverEquacao