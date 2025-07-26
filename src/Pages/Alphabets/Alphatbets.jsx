import React from 'react'
import { use } from 'react';
const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const Alphatbets = ({usedLetters, onLetterClick}) => {

  const selectedLetters = new Set(usedLetters.toUpperCase().split(''));
console.log(selectedLetters)
  const buttonStyle = function(letters){
    if(selectedLetters.has(letters)){
    return 'var(--successColor)'
    }
    else{
      return 'var(--btnColor)'
    }
  }
const handleClick = function (event){
const charecter = event.target.value;
onLetterClick?. (charecter);
}

const button = alphabets.map(letter =>{
  return(
    <button key={`button - ${letter}`}
    className='alpha'
    style={{backgroundColor : buttonStyle(letter)}}
    value={letter}
    disabled={selectedLetters.has(letter)}
    >
{letter}
    </button>
  )
})
  return (
    <div>
      {button}
    </div>
  );
}

export default Alphatbets


