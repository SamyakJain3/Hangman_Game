function allUsedLetters(word, usedLetters = []) {
  const usedLetterArr = usedLetters.map(l=>l.toUpperCase());
  return word.toUpperCase().split('').map(char =>
    usedLetterArr.includes(char) ? char : '_'
  );
}

export default allUsedLetters