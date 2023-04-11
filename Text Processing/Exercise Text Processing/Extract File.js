function extractFile(string){
let fileExtension = string.substring(string.lastIndexOf(".") + 1)
let fileName = string.substring(string.lastIndexOf("\\") + 1,string.lastIndexOf("."))
console.log(`File name: ${fileName}`);
console.log(`File extension: ${fileExtension}`);
}extractFile('C:\\Internal\\training-internal\\Template.pptx')