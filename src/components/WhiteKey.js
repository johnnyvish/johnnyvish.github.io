function WhiteKey(props) {

  const path = `audio/softest/${props.note}.mp3`

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
    <div className="white-key" onMouseDown = {handleMouseDown} onMouseOver = {handleMouseOver} onMouseLeave = {handleMouseLeave}></div>
  )
}

export default WhiteKey