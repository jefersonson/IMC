function multDiv(){
    const Altura = document.getElementById("Altura")
    const Peso = document.getElementById("Peso")

    const numero1 = Number(Altura.value)
    const numero2 = Number(Peso.value)

    const resultado = (numero2 / (numero1 ** 2)).toFixed(2)

    if(resultado <= 16.9){
        document.getElementById("resultado").innerText = "Muito abaixo do peso: " + resultado
        }else if(resultado >= 17 && resultado <= 18.4){
         document.getElementById("resultado").innerText = "Abaixo do peso: " + resultado
        }else if(resultado >= 25 && resultado <= 29.9){
         document.getElementById("resultado").innerText = "Acima do peso: " + resultado
        }else if(resultado >= 30 && resultado <= 34.9 ){
         document.getElementById("resultado").innerText = "Obesidade grau I: " + resultado
        }else if(resultado >= 35 && resultado <= 40){
        document.getElementById("resultado").innerText = "Obesidadegrau II: " + resultado
        }else{
        document.getElementById("resultado").innerText = "Obesidade grau III/VC É GORDO!!!: " + resultado
        }
}