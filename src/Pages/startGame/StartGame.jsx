import React from 'react'
import InputForm from '../../components/InputForm/inputForm'
import './startGame.css'
const StartGame = () => {
 

  return (
    <div className='start'>
    <div className='instruction'>
      <h1>Welcome to HangMan Game!!</h1>
      <p>Enter the word for guessing</p>
    </div>
     <div>
     <InputForm label="Enter your word" type="text" />
     </div>
    </div>
  )
}

export default StartGame
