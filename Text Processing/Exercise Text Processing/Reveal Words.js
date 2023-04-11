function revealWords(wordsToReveal, text) {
  let wordsToRevealArr = wordsToReveal.split(", ");
  let textArr = text.split(" ").filter((word) => word.startsWith("*"));
  let res = "";
  for (let word of textArr) {
    for (let wordToReveal of wordsToRevealArr) {
      if (word.length === wordToReveal.length) {
        if (res === "") {
          res = text.replace(word, wordToReveal);
        }else{
            res = res.replace(word, wordToReveal);
        }
      }
    }
  }
  return res
}
console.log(revealWords(
    "great, learning",
  
    "softuni is ***** place for ******** new programming languages"
  ))
