let utter = new SpeechSynthesisUtterance();
utter.lang = 'en-US';
utter.text = '';
utter.volume = 0.5;
utter.rate = 0.8;
utter.pitch = 1.3;

const arrows = document.querySelectorAll('.left-arrow, .right-arrow')
const pianoKeys = document.querySelectorAll('.white-key, .black-key')
const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const arr = ["grand-piano", "classical", "pop", "softest", "bright"];
let pointer = 3;
let notesSelected = [];
// make a dictionary with chord names and their notes
const chords = {
    'Cmaj': ['C', 'E', 'G'],
    'Cmin': ['C', 'D#', 'G'],
    'C#maj': ['C#', 'F', 'G#'],
    'C#min': ['C#', 'E', 'G#'],
    'Dmaj': ['D', 'F#', 'A'],
    'Dmin': ['D', 'F', 'A'],
    'D#maj': ['D#', 'G', 'A#'],
    'D#min': ['D#', 'F#', 'A#'],
    'Emaj': ['E', 'G#', 'B'],
    'Emin': ['E', 'G', 'B'],
    'Fmaj': ['F', 'A', 'C'],
    'Fmin': ['F', 'G#', 'C'],
    'F#maj': ['F#', 'A#', 'C#'],
    'F#min': ['F#', 'A', 'C#'],
    'Gmaj': ['G', 'B', 'D'],
    'Gmin': ['G', 'A#', 'D'],
    'G#maj': ['G#', 'C', 'D#'],
    'G#min': ['G#', 'B', 'D#'],
    'Amaj': ['A', 'C#', 'E'],
    'Amin': ['A', 'C', 'E'],
    'A#maj': ['A#', 'D', 'F'],
    'A#min': ['A#', 'C#', 'F'],
    'Bmaj': ['B', 'D#', 'F#'],
    'Bmin': ['B', 'D', 'F#'],
    // diminished chords
    'Cdim': ['C', 'D#', 'F#'],
    'C#dim': ['C#', 'E', 'G'],
    'Ddim': ['D', 'F', 'G#'],
    'D#dim': ['D#', 'F#', 'A'],
    'Edim': ['E', 'G', 'A#'],
    'Fdim': ['F', 'G#', 'B'],
    'F#dim': ['F#', 'A', 'C'],
    'Gdim': ['G', 'A#', 'C#'],
    'G#dim': ['G#', 'B', 'D'],
    'Adim': ['A', 'C', 'D#'],
    'A#dim': ['A#', 'C#', 'E'],
    'Bdim': ['B', 'D', 'F'],
    // major 7th chords
    'Cmaj7': ['C', 'E', 'G', 'B'],
    'C#maj7': ['C#', 'F', 'G#', 'C'],
    'Dmaj7': ['D', 'F#', 'A', 'C#'],
    'D#maj7': ['D#', 'G', 'A#', 'D'],
    'Emaj7': ['E', 'G#', 'B', 'D#'],
    'Fmaj7': ['F', 'A', 'C', 'E'],
    'F#maj7': ['F#', 'A#', 'C#', 'F'],
    'Gmaj7': ['G', 'B', 'D', 'F#'],
    'G#maj7': ['G#', 'C', 'D#', 'G'],
    'Amaj7': ['A', 'C#', 'E', 'G#'],
    'A#maj7': ['A#', 'D', 'F', 'A'],
    'Bmaj7': ['B', 'D#', 'F#', 'A#'],
    // minor 7th chords
    'Cmin7': ['C', 'D#', 'G', 'A#'],
    'C#min7': ['C#', 'E', 'G#', 'B'],
    'Dmin7': ['D', 'F', 'A', 'C'],
    'D#min7': ['D#', 'F#', 'A#', 'C#'],
    'Emin7': ['E', 'G', 'B', 'D'],
    'Fmin7': ['F', 'G#', 'C', 'D#'],
    'F#min7': ['F#', 'A', 'C#', 'E'],
    'Gmin7': ['G', 'A#', 'D', 'F'],
    'G#min7': ['G#', 'B', 'D#', 'F#'],
    'Amin7': ['A', 'C', 'E', 'G'],
    'A#min7': ['A#', 'C#', 'F', 'G#'],
    'Bmin7': ['B', 'D', 'F#', 'A']
}

function randomChord() {
    let chord = Object.keys(chords)[Math.floor(Math.random() * Object.keys(chords).length)];
    return chord;
}

let currentChord = randomChord();

function chordName(notes) {
    for (let chord in chords) {
        if (chords[chord].length !== notes.length) continue;
        if (chords[chord].every(note => notes.includes(note))) return chord;
    }
    return ''; 
}

   
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
            document.getElementById('sound-selection-text').innerHTML = pianoKey.id + '/' + nextHalfStep(pianoKey.id.substring(0,2)) + 'b' + pianoKey.id[pianoKey.id.length - 1];
        }
        else {
            document.getElementById('sound-selection-text').innerHTML = pianoKey.id;
        }
        
    })

    pianoKey.addEventListener('mouseout', () => {
        pianoKey.classList.remove('hover')
        document.getElementById('sound-selection-text').innerHTML = arr[pointer];
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

let speak = true;


function onMIDIMessage(event) {

    if (speak) {
        speak = false
        document.getElementById('sound-selection-text').innerHTML = currentChord;
        let text = currentChord[0];
        if (currentChord[1] == "#"){
            text += "-sharp" + "-" + currentChord.substring(2);
        }
        if (currentChord[1] != "#"){
            text += "-" + currentChord.substring(1);
        }
       
        utter.text = text;
        window.speechSynthesis.speak(utter);
    }
    
    const [command, note, velocity] = event.data;
    let noteName = midiNoteToName(note);
    let noteOctave = midiNoteToOctave(note);
    if (noteName.length == 2) {
        soundPlayer = new Audio('/piano-sounds/' + arr[pointer] + '/' + noteName[0] + 'sharp' + noteOctave + '.mp3')
    } else {
        soundPlayer = new Audio('/piano-sounds/' + arr[pointer] + '/' + noteName + noteOctave + '.mp3')
    }
   
    if (velocity > 0){
        
        document.getElementById(noteName+noteOctave).classList.add('active')

        notesSelected.push(noteName)
        let chord = chordName(notesSelected)


        if (chord == currentChord){
            utter.text = "Correct";
            window.speechSynthesis.speak(utter);
            document.getElementById('Check').style.scale = 0.5;
            currentChord = randomChord()
            document.getElementById('sound-selection-text').innerHTML = currentChord;
            speak = true;

        }

        soundPlayer.volume = velocity / 127.0;
        soundPlayer.play()
        
    }
    else{
        document.getElementById('Check').style.scale = 0;
        notesSelected.pop(noteName)
        chord = chordName(notesSelected)
        if (chord == currentChord){
            currentChord = randomChord()
        }

        document.getElementById(noteName+noteOctave).classList.remove('active')
    }

}

