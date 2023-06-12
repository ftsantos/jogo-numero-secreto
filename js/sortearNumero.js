const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1); /** + 1 pra incluir o maiorValor no número gerado */
}

console.log('Número secreto: ', numeroSecreto);

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
