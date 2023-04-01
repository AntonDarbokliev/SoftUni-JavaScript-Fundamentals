function solve(nameBand,nameAlbum,nameSong){
let songDuration = (nameAlbum.length * nameBand.length) * nameSong.length / 2
let timesRotated = Math.ceil(songDuration/ 2.5)
console.log(`The plate was rotated ${timesRotated} times.`);

}
solve('Rammstein', 'Sehnsucht',

'Engel')