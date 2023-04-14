function matchDate(arr){
    let regex = /\b(?<day>\d{2})([/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g
    let i = 0
let match = arr[i].match(regex)
while (match !== null){
    let day = match.groups.day
    let month = match.groups.month
    let year = match.groups.year
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    i++
    match = arr[i].match(regex)
}

}
matchDate([`13/Jul/1928,`,`10-Nov-1934,`,`01/Jan-1951,`], )