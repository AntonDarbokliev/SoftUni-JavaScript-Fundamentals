function wordOccurrences(wordsArr) {
  let map = new Map();

  for (let word of wordsArr) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      let currentValue = map.get(word);
      map.set(word, currentValue + 1);
    }
  }

  let entries = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let [key, value] of entries) {
    console.log(`${key} -> ${value} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  
  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);

  