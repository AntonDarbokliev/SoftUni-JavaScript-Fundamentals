function matchPhoneNumbers(arr){
let regex = /\+359(?<delimeter>[ -])2\k<delimeter>\d{3}\k<delimeter>\d{4}/g
let match = regex.exec(arr[0])
let res = []
while(match !== null){
    res.push(match[0])
    match = regex.exec(arr[0])
}
return res.join(", ")


}console.log(matchPhoneNumbers(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
); 
