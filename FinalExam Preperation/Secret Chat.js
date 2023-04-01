function secretChat(arr){
    let messageToBeRevealed = arr.shift()
for(let message of arr){
    if(message === "Reveal"){
    console.log(`You have a new text message: ${messageToBeRevealed}`);
    break;
    }
    let [currentMessage,firstParameter,secondParameter] = message.split(":|:")
switch(currentMessage){
case "ChangeAll":
 changeAll(firstParameter,secondParameter)
break;
case"Reverse":
reverse(firstParameter)
break;
case"InsertSpace":
insertSpace(firstParameter)
 
}
}
 
function changeAll(firstParameter,secondParameter){
    messageToBeRevealed = messageToBeRevealed.split("")
    while(messageToBeRevealed.includes(firstParameter)){
        messageToBeRevealed[messageToBeRevealed.indexOf(firstParameter)] = secondParameter
    }
    messageToBeRevealed = messageToBeRevealed.join("")
    console.log(messageToBeRevealed);
}
function reverse(firstParameter){
if(messageToBeRevealed.includes(firstParameter)){
    let partToReverse = messageToBeRevealed
    .substring(messageToBeRevealed.indexOf(firstParameter),messageToBeRevealed.indexOf(firstParameter) + firstParameter.length)
    messageToBeRevealed = messageToBeRevealed.replace(partToReverse,"")
partToReverse = partToReverse.split("").reverse().join("")
messageToBeRevealed = messageToBeRevealed + partToReverse
console.log(messageToBeRevealed);
}else{
    console.log("error");
}
}
function insertSpace(firstParameter){
    messageToBeRevealed = messageToBeRevealed.substring(0,firstParameter) + " " + messageToBeRevealed.substring(firstParameter)
    console.log(messageToBeRevealed);
}
 
}secretChat(['heVVodar!gniV','ChangeAll:|:V:|:l', 'Reverse:|:!gnil','InsertSpace:|:5', 'Reveal'])