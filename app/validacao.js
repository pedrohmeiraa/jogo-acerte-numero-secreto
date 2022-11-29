function verificaValidade(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        
        if(chute.toUpperCase()==="GAME OVER"){
            document.body.innerHTML = 
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
        }
        else{
            elementChute.innerHTML += '<div>Valor inválido.</div>'
        }
         

    }
    if(numeroForMaiorOuMenorQueNumero(numero)){
        elementChute.innerHTML += `<div> Valor inválido. Fora do intervalo entre ${menorValor} e ${maiorValor}. </div>`
        return
    }
    if(numero===numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h3> O número secreto era ${numeroSecreto}. </h3>
        <button id="jogar-novamente" class="btn-jogar"> Jogar novamente</button>

        `
        
    } else if (numero > numeroSecreto){
        elementChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i> .</div>`
    } else {
        elementChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i> .</div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueNumero(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})