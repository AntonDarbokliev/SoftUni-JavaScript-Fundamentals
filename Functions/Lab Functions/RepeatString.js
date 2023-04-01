function repeatString(number,string) {
  
  let result = buildNewString(number,string)
  return result;
  
  
  
    function buildNewString(string, number) {
    let buff = "";
    for (let i = 1; i <= number; i++) {
buff+=string
}
return buff;
}
}
console.log(repeatString("abc",3))
