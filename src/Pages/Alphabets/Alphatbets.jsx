import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const Alphatbets = ({usedLetters, onLetterClick,word}) => {
  const [step,setStep]= useState(0)
  const selectedLetters = usedLetters.join('').toUpperCase().split('');
  const wordLetters = new Set(word.toUpperCase().split(''));
  const navigate = useNavigate();
  const buttonStyle = function(letters){
    if(selectedLetters.includes(letters)){
    return wordLetters.has(letters) ? 'var(--successColor)' : 'var(--errorColor)';
    }
    else{
      return 'var(--btnColor)'
    }
  }
  const handleClick = function (event){
       const charecter = event.target.value;
       onLetterClick?.(charecter.toUpperCase());  
  if(!wordLetters.has(charecter)){
       setStep(step+1)
      if(step>3){
        alert('you Lost the Game, Plz try again')
        navigate('/start')
    }
   } 
   }
const button = alphabets.map(letter =>{
    return(
      <button key={`button - ${letter}`}
      className='alpha'
      style={{backgroundColor : buttonStyle(letter)}}
      value={letter}
    disabled={selectedLetters.includes(letter)}
    onClick={handleClick}
    >
{letter}
    </button>
  )
})
  return (
    <>
    <div>
       {`failed attempts : ${step}`}
    </div>
      {button}
    </>
  );
}

export default Alphatbets


