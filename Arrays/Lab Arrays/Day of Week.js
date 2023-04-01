function solve(num){
let daysOfTheWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
if(num>0&&num<8){
console.log(daysOfTheWeek[num-1]);
}else{
    console.log("Invalid day!");
}


}
solve(3)