
function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if(chuteForInvalido(numero)){
       
        if (chute.toUpperCase() === "GAME OVER") {
            fimDeJogo(true);
        } else{
            //console.log('Valor inválido. Por favor, fale um número.');   
            verificaErros();
            elementoChute.innerHTML += '<div>Valor inválido. Por favor, fale um número</div>'
        }
    
    }

    if(numeroMenorOuMaiorQueOValorPermitido(numero)){
        //console.log(`Valor inválido. O número precisa estar entre ${menorValor} e ${maiorValor}.`);
        elementoChute.innerHTML += 
            `<div>Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    }

    if(numero === numeroSecreto){
        secao = document.querySelector('.secao-painel');
        secao.innerHTML =
         `<section class="secao-painel">
            <h2 id="h2-voce-venceu">Parabéns <br> Você acertou</h2>
            <h3 id="h3-voce-venceu">O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</div>
            </section>
        `;

        document.body.style.backgroundColor = "#C8DBBE";
        document.body.style.color = "#665A48";

        elementoH2 = document.querySelector('#h2-voce-venceu');
        elementoH2.style.fontSize = '60px';
        elementoH2.style.fontWeight = '800';

        elementoH3 = document.querySelector('#h3-voce-venceu');
        elementoH3.style.fontSize = '50px';        
        elementoH3.style.fontWeight = '600';

        botao = document.querySelector('#jogar-novamente');
        botao.style.backgroundColor = '#665A48';
        botao.style.color = '#EDE4E0';

    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i> </div>`;
        verificaErros();
    } else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i> </div>`;
        verificaErros();
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMenorOuMaiorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

function verificaErros(){
    quantidadeDeErros = quantidadeDeErros + 1;

    console.log('Erros: ', quantidadeDeErros);

    elementoErro = document.querySelector('#quantidade-erros');
    elementoErro.innerHTML = `Erros: ${quantidadeDeErros}`;

    if(quantidadeDeErros === quantidadeMaximaDeErros){
        fimDeJogo(false);
        //recognition.stop();
    }
}

function fimDeJogo(gameOver){
    secao = document.querySelector('.secao-painel');
    if(!gameOver){
        //document.body.innerHTML =
        secao.innerHTML =
            `<section class="secao-painel">
                <h2>Game Over!!!</h2>
                <h3>Você errou ${quantidadeDeErros} vezes</h3>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                </section>
                `
    }else{
        secao.innerHTML =
            `<section class="secao-painel">
                <h2>Game Over!!!</h2>
                <h3>Você Desistiu</h3>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                </section>
                `
    }
    document.body.style.backgroundColor = "black";
}

document.body.addEventListener("click", e => {
    if(e.target.id == 'jogar-novamente'){
        quantidadeDeErros = 0;
        window.location.reload();
    }
});
