function checkCharactersInRange(a, b) {
  let aFromASCII = a.charCodeAt(0);
  let bFromASCII = b.charCodeAt(0);

  let start = determineStart(aFromASCII, bFromASCII);
  let end = determineEnd(aFromASCII, bFromASCII);

  let buff = "";

  for (let i = start + 1; i < end; i++) {
    let currentChar = String.fromCharCode(i);
    buff += currentChar + " ";
  }

  return buff.trim();

  function determineStart(a, b) {
    return a < b ? a : b;
  }

  function determineEnd(a, b) {
    return a > b ? a : b;
  }
}
console.log(checkCharactersInRange("C", "#"));
