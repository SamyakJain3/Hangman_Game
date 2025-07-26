import React, { useState } from 'react'
import Maskedtext from '../maskedText/maskedtext';
import Alphatbets from '../Alphabets/Alphatbets';
import './playGame.css'
import { useLocation } from 'react-router-dom';

const PlayGame = ({}) =>{

const location = useLocation();
const text = location.state? location.state : '';

return (
  <>
   <h1>trying to guess the word !!</h1>
<br />
   <Maskedtext text={text} usedLetter="se"/>
<br/>
   <Alphatbets usedLetters='se'/>
 </>
  )
};
export default PlayGame