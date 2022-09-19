function nextNote(c) {
    if (c == 'G') {
        return 'A';
    }
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

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
    // if notename is more than one character
    if (noteName.length > 1) {
        soundPlayer = new Audio('/grand-piano/' + noteName[0] + 'sharp' + noteOctave + '.mp3')
    } else {
        soundPlayer = new Audio('/grand-piano/' + noteName + noteOctave + '.mp3')
    }
   
    if (velocity > 0){
        soundPlayer.volume = velocity / 80;
        soundPlayer.play()
        document.getElementById('note-name').innerHTML = noteName;
        document.getElementById(noteName+noteOctave).classList.add('active')
        document.getElementById('note-name').innerHTML = noteName + noteOctave;
    }
    if (velocity == 0){
        document.getElementById(noteName+noteOctave).classList.remove('active')
    }

}

function midiNoteToName(note) {
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    return noteNames[note % 12];
}

function midiNoteToOctave(note) {
    return Math.floor(note / 12) - 1;
}

const pianoKeys = document.querySelectorAll('.white-key, .black-key')


pianoKeys.forEach(pianoKey=> {
   
    pianoKey.addEventListener('mouseover', () => {
        if (pianoKey.id.length > 2) {
            document.getElementById('note-name').innerHTML = pianoKey.id + '/' + nextNote(pianoKey.id[0]) + 'b' + pianoKey.id[pianoKey.id.length - 1];
        }
        else {
            document.getElementById('note-name').innerHTML = pianoKey.id;
        }
        
        pianoKey.classList.add('hover')
    })

    pianoKey.addEventListener('mouseout', () => {
        document.getElementById('note-name').innerHTML = '';
        pianoKey.classList.remove('hover')
    })

    pianoKey.addEventListener('mousedown', () => {

        let note = pianoKey.id[0]
        // octave is the last character of the id
        let octave = pianoKey.id[pianoKey.id.length - 1]
        
        // if the id has more than two characters, it's a sharp note
        if (pianoKey.id.length > 2) {
            note += 'sharp'
        }

        soundPlayer = new Audio('/grand-piano/' + note + octave + '.mp3')
        soundPlayer.play()

        document.getElementById('note-name').classList.add('active')
    
        pianoKey.classList.remove('hover')
        pianoKey.classList.add('active')
    }

    )
    pianoKey.addEventListener('mouseup', () => {

        document.getElementById('note-name').classList.remove('active')

        pianoKey.classList.remove('active')
        pianoKey.classList.add('hover')
    }
    )
})