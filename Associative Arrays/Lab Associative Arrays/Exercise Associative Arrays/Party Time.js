function party(arr){
let guestList = []
let guestListVip = []
for(let guest of arr){
    if(guest === "PARTY"){
        break;
    }
    if(!isNaN(Number(guest[0]))){
        guestListVip.push(guest)
    }else{
        guestList.push(guest) 
    }
}
let partyIndex = arr.indexOf('PARTY')
let newArr = []
for(let i = partyIndex + 1;i<arr.length;i++){
    if(guestList.includes(arr[i])){
        guestList.splice(guestList.indexOf(arr[i]),1)
    }
    if(guestListVip.includes(arr[i])){
        guestListVip.splice(guestListVip.indexOf(arr[i]),1) 
    }
}

let vipGuestList = [...guestListVip]
let guestListRegular = [...guestList]

iterateGuesList(guestListVip)
iterateGuesList(guestList)

function iterateGuesList(arr){
    for(let guest of arr){
        
            newArr.push(guest) 
        
        
    } 
}

console.log(newArr.length);
console.log(newArr.join("\n"));

}
party(['7IK9Yo0h',

'9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])