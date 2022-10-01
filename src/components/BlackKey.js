function BlackKey(props) {

  const path = (`audio/softest/${props.note}.mp3`).replace('#', '%23')

  const playNote = () => {
    new Audio(path).play()
  }

  const handleMouseDown = () => {
    playNote()
  }

  const handleMouseOver = () => {
    props.setScreenText(props.note)
  }

  const handleMouseLeave = () => {
    props.setScreenText('')
  }

  return (
    <div className='black-key' onMouseDown = {handleMouseDown} onMouseOver = {handleMouseOver} onMouseLeave = {handleMouseLeave}></div>
  )
}

export default BlackKey