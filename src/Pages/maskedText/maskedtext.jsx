import React, { use } from 'react'
import allUsedLetters from './maskedtextUtility'
  const maskedtext = ({text, usedLetters}) => {
    const letter = allUsedLetters(text, usedLetters);
const usedLetter =
  letter.map((char , index)=> (
    <span key={index}>{char}</span>
  ))
  console.log(usedLetter)
    return (
      <div>
        {usedLetter}
      </div>
    )
  }
  
  export default maskedtext
  