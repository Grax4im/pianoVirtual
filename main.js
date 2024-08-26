//key all keys
const keys = document.querySelectorAll('.key')

//play notes
function playNote(event) {
    
    const keyCode = getKeyCode(event)
    const key = getKey(keyCode);
    if (key !== null) {
        pressKey(key)
        playAudio(keyCode)
    }
}

function getKeyCode(event) {

    let keyCode; 

    if(event.type === 'keydown') {
        keyCode = event.keyCode    
    }
    else {
        keyCode = event.target.dataset.key
    }
    
    return keyCode
}

function getKey(keyCode){
    
    return document.querySelector(`[data-key="${keyCode}"]`)
}

function pressKey(key) {
    key.classList.add('playing')
}

function playAudio(keyCode) {
    audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function removePlaying(event){
    event.target.classList.remove('playing')
}

keys.forEach(function(key) {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend',removePlaying)
});

window.addEventListener('keydown', playNote)


