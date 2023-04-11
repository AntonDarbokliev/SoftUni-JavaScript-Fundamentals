function cencorWords(string,word){
while (string.includes(word)){
   string = string.replace(word,'*'.repeat(word.length))
}
return string
}cencorWords('A small sentence with some words',

'small')