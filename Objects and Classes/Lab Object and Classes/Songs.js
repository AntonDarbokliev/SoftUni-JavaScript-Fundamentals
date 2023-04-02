function songs(arr) {

  class Song {
    constructor(typeList, songname, songtime) {
      this.typeList = typeList;
      this.name = songname;
      this.time = songtime;
    }
  }

  let numberOfSongs = arr.shift();
  let typeListAll = arr.pop();

  for (let song of arr) {
    let [typeList, name, time] = song.split("_");
    song = new Song(typeList, name, time);

    if (typeListAll === "all" ) {
        console.log(song.name);
    }else{
        if(song.typeList === typeListAll){
            console.log(song.name);
        }
    }
  }
}

songs
  ([3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite"])
;
