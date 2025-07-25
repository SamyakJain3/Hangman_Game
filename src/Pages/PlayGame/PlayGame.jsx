 const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

import React, { useState } from 'react'
import './playGame.css'
const PlayGame = ({ word = 'samyak' }) => {
  const [usedletters, setUsedletters] = useState(''); 

  const wordArr = word.toUpperCase().split('');
  const usedlettersArr = usedletters.toUpperCase().split('');
  const usedWordArr = wordArr.map((char) =>
    usedlettersArr.includes(char) ? char : '_'
  );
  console.log(usedWordArr);

   const handleLetterClick = (letter) => {
    if (!usedlettersArr.includes(letter)) {
      setUsedletters(usedletters + letter);
    }
  };
  return (
    <div>
      <h1>Tryinng to guess the  Word !!</h1>
      <div>
      {usedWordArr.map((char, idx) => (
        <span key={idx} style={{ margin: '0 5px', fontSize: '2rem' }}>
          {char}
        </span>
      ))}
      </div>
   <div>
      {alphabets.map((letter) => (
        <button key={letter} className="alpha" onClick={() => handleLetterClick(letter)}>{letter}</button>
      ))}
  </div>
        
      </div>
    
  )
}

export default PlayGame