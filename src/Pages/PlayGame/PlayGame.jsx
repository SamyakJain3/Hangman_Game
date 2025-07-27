import React, { useState } from 'react'
import Maskedtext from '../maskedText/maskedtext';
import Alphatbets from '../Alphabets/Alphatbets';
import './playGame.css'
import { Link, useLocation } from 'react-router-dom';

const PlayGame = ({}) =>{
const [usedLetters, setUsedLetters] = useState([]);
const location = useLocation();
const text = location.state? location.state : '';

function handleLetterClick(letter) {
  if (!usedLetters.includes(letter.toUpperCase())) {
    setUsedLetters([...usedLetters,letter.toUpperCase()]);
  }
}
return (
  <div className='play'>
   <h1>trying to guess the word !!</h1>
   <h5>You only have 5 attempts</h5>
<br />
   <Maskedtext text={text} usedLetters={usedLetters}/>
<br/>
   <Alphatbets usedLetters={usedLetters} word={text} onLetterClick={handleLetterClick}/>
<br />
<p>if you won the Game then <br />Click on this link To Play Again</p>
<Link to='/start'>reset Game</Link>
 </div>
  )
};
export default PlayGame