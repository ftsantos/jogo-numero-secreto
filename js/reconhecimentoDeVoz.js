/*
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

window.SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

https://wicg.github.io/speech-api/#speechreco-section
*/

const elementoChute= document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    //console.log(e.results[0][0].transcript);
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}
  
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = 
        `<div>Você disse:</div>
        <span class="box"> ${chute} </span>`;
}

recognition.addEventListener('end', () => recognition.start());