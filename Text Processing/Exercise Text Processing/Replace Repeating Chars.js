function replace(str) {
    let newString = ''
    for(let letter of str){
    if(newString[newString.length-1]!== letter) newString+=letter
    }
    console.log(newString);
    }
    replace('aaaaabbbbbcdddeeeedssaa')