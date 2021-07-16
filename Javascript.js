
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// Creating new instance
const recognition = new SpeechRecognition();
console.log(recognition);
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.card');

recognition.addEventListener('result', event => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;
    if (event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
});
recognition.addEventListener('end', recognition.start);

// Starting recognition first time
recognition.start();