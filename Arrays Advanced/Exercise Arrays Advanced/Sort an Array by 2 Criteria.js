function sortByTwoCriteria(arr){
arr.sort((a,b) => {
if(a.length === b.length){
return a.localeCompare(b)
}

return a.length - b.length
})
console.log(arr.join("\n"));


}
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
//['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']
//['alpha','beta','gamma']