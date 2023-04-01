function solve(array){
    let username = array[0]
    let correctPass = array[0].split("").reverse().join("")
    let wrongPassStreak = 0;

for(let i = 1;i<=array.length;i++){
    
    if(array[i]== correctPass ){
console.log(`User ${username} logged in.`);
break;
}else{
    wrongPassStreak++
    if(wrongPassStreak==4){
        console.log(`User ${username} blocked!`);
        break;
            }
    console.log('Incorrect password. Try again.');
    
}
if(wrongPassStreak==4){
    console.log(`User ${username} blocked!`);
    break;
        }

}

}
solve(['momo','omom'])