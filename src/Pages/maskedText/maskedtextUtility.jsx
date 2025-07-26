function allUsedLetters(word , letters){
  const usedLetterArrs = letters.toUpperCase().split("");
  const wordArr =  word.toUpperCase().split("").map((char)=>
  usedLetterArrs.includes(char)?char:'_')
  return wordArr;

}
  export default allUsedLetters
