import React from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import StartGame from './Pages/startGame/StartGame'
import PlayGame from './Pages/PlayGame/PlayGame'
import Button from './components/button/button'
function App() {
  const navigate = useNavigate();
  const path = window.location.pathname;

  const handleStartGame = (e) => {
    navigate('/start');
    e.preventDefault();
  }; 

  return (
    <>
    <Routes>
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
    </Routes>
    
     <div className="App" style={{display: path === '/start'? 'none' : 'flex'}}>
      <h1>Welcome to the Hangman Game !</h1>
      <p>Get ready to guess the word letter by letter.</p>
      <Button value='Start Game' color={'var(--btnColor)'} onClick={handleStartGame}/>
    </div>
    </>
  )
}

export default App
