const pianoKeys = document.querySelectorAll('.key')

function playSound(id) {
    new Audio(id).play()
}


pianoKeys.forEach((pianoKey, i) => {
   
    pianoKey.addEventListener('mouseover', () => {
        const url = 'audio/' + pianoKey.id + '.mp3'
        pianoKey.style.backgroundColor = 'red'
        playSound(url)
    })


    // if pianoKey has an id that contains "#", change the key color to black
    pianoKey.addEventListener('mouseout', () => pianoKey.style.backgroundColor = pianoKey.id.includes('sharp') ? 'black' : 'white')

    

})