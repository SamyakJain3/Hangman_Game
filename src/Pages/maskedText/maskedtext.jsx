 import React from 'react'
import allUsedLetters from './maskedtextUtility'
  const maskedtext = ({text, usedletters="se"}) => {
    const letter = allUsedLetters(text, usedletters);


const usedLetters =
  letter.map((char , index)=> (
    <span key={index}>{char}</span>
  ))
    return (
      <div>
        {usedLetters}
      </div>
    )
  }
  
  export default maskedtext
  