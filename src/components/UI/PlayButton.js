import React from 'react'
import './PlayButton.css'

function PlayButton(props) {
  const buttonClass = `play-button ${props.className || ''}`
  return (
    <button className={buttonClass}>
      <img className='play' src="/play.png" alt="" />
    </button>
  )
}

export default PlayButton