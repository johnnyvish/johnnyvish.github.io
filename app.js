const arrows = document.querySelectorAll('.left-arrow, .right-arrow')
const pianoKeys = document.querySelectorAll('.white-key, .black-key')
const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const arr = ["grand-piano", "classical", "pop", "softest", "bright"];
let pointer = 0;

function nextHalfStep(c) {
    if (c == 'B') {
        return 'C';
    }
    for (let i = 0; i < noteNames.length; i++) {
        if (noteNames[i] == c) {
            return noteNames[i + 1];
        }
    }
}

function nextWholeStep(c) {
    if (c == 'B') {
        return 'C#';
    }
    if (c == 'A#') {
        return 'C';
    }
    for (let i = 0; i < noteNames.length; i++) {
        if (noteNames[i] == c) {
            return noteNames[i + 2];
        }
    }
}
    
function midiNoteToName(note) {
    return noteNames[note % 12];
}

function midiNoteToOctave(note) {
    return Math.floor(note / 12) - 1;
}

arrows.forEach(arrow => {
    arrow.addEventListener('mousedown', (e) => {
        var e = e || window.event;
        var btnCode;
        btnCode = e.button;
        if (btnCode == 0){
            arrow.classList.add('active')
            if (arrow.classList.contains('left-arrow')) {
                pointer--;
            }
            if (arrow.classList.contains('right-arrow')) {
                pointer++;
            }
            if (pointer < 0) {
                pointer = arr.length - 1;
            }
            if (pointer > arr.length - 1) {
                pointer = 0;
            }

            document.getElementById('sound-selection-text').innerHTML = arr[pointer];
        }
    })
    arrow.addEventListener('mouseup', () => {
        arrow.classList.remove('active')
    })
})

pianoKeys.forEach(pianoKey=> {
   
    pianoKey.addEventListener('mouseover', () => {

        pianoKey.classList.add('hover')
        
        if (pianoKey.id.length == 3) {
            document.getElementById('note-name').innerHTML = pianoKey.id + '/' + nextHalfStep(pianoKey.id.substring(0,2)) + 'b' + pianoKey.id[pianoKey.id.length - 1];
        }
        else {
            document.getElementById('note-name').innerHTML = pianoKey.id;
        }
        
    })

    pianoKey.addEventListener('mouseout', () => {
        pianoKey.classList.remove('hover')
        document.getElementById('note-name').innerHTML = '';
    })

    pianoKey.addEventListener('mousedown', (e) => {

        var e = e || window.event;
        var btnCode;
        btnCode = e.button;
        
        if (btnCode == 0){

            let note = pianoKey.id[0]
            let octave = pianoKey.id[pianoKey.id.length - 1]
            
            if (pianoKey.id.length == 3) {
                note += 'sharp'
            }

            soundPlayer = new Audio('/piano-sounds/' + arr[pointer] + '/' + note + octave + '.mp3')
            soundPlayer.play()

            document.getElementById('note-name').classList.add('active')
        
            pianoKey.classList.remove('hover')
            pianoKey.classList.add('active')
        }
    })

    pianoKey.addEventListener('mouseup', () => {

        let note = pianoKey.id[0]
        let octave = pianoKey.id[pianoKey.id.length - 1]
        
        if (pianoKey.id.length > 2) {
            note += 'sharp'
        }

        document.getElementById('note-name').classList.remove('active')

        pianoKey.classList.remove('active')
        pianoKey.classList.add('hover')
    }
    )
})

// MIDI SETUP

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
}

function onMIDISuccess(midiAccess) {
    const inputs = midiAccess.inputs;

    inputs.forEach(input => {
        input.addEventListener('midimessage', onMIDIMessage);
    }
    )
    
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');

}

function onMIDIMessage(event) {
    const [command, note, velocity] = event.data;
    let noteName = midiNoteToName(note);
    let noteOctave = midiNoteToOctave(note);
    if (noteName.length == 2) {
        soundPlayer = new Audio('/piano-sounds/' + arr[pointer] + '/' + noteName[0] + 'sharp' + noteOctave + '.mp3')
    } else {
        soundPlayer = new Audio('/piano-sounds/' + arr[pointer] + '/' + noteName + noteOctave + '.mp3')
    }
   
    if (velocity > 0){

        soundPlayer.volume = velocity / 127.0;
        soundPlayer.play()
       

        document.getElementById('note-name').innerHTML = noteName + noteOctave;
        document.getElementById(noteName+noteOctave).classList.add('active')
    }
    else{
      
        document.getElementById(noteName+noteOctave).classList.remove('active')
    }

}

