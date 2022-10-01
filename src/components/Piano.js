import {useState} from 'react';
import WhiteKey from './WhiteKey'
import BlackKey from './BlackKey'
import Screen from './Screen'
import NOTES from '../constants/NOTES';

function Piano() {

  const [screenText, setScreenText] = useState('')

  const keys = [];
  for (let i = 0; i < NOTES.length; i++) {
    if (NOTES[i].includes('#')) {
      keys.push(<BlackKey note={NOTES[i]} setScreenText={setScreenText}/>)
    } else {
      keys.push(<WhiteKey note={NOTES[i]} setScreenText={setScreenText}/>)
    }
  }

  return (
    <div className='piano'>
      <div className='controller'>
        <Screen text = {screenText}/>
      </div>
      <div className='keys'>{keys}</div>
  </div>
  )
}

export default Piano