function tracker(words) {
  let wordsToLookFor = words.shift().split(" ");
  let wordOccurrences = new Map();

  for (let currentWord of wordsToLookFor) {
    wordOccurrences.set(currentWord, 0);
  }

  for (let currentWord of words) {
    if (wordOccurrences.has(currentWord)) {
      let currentValue = wordOccurrences.get(currentWord);
      wordOccurrences.set(currentWord, currentValue + 1);
    }
  }

  let sortedWords = [...wordOccurrences.entries()].sort((a, b) => b[1] - a[1]);

  for (let [word, count] of sortedWords) {
    console.log(`${word} - ${count}`);
  }
}
tracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
