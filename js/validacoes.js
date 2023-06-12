
function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if(chuteForInvalido(numero)){
        //console.log('Valor inválido. Por favor, fale um número.');
        elementoChute.innerHTML += '<div>Valor inválido. Por favor, fale um número</div>'
    }

    if(numeroMenorOuMaiorQueOValorPermitido(numero)){
        //console.log(`Valor inválido. O número precisa estar entre ${menorValor} e ${maiorValor}.`);
        elementoChute.innerHTML += 
            `<div>Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Parabéns. Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</div>
        `;
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i> </div>`;
    } else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i> </div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMenorOuMaiorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});
