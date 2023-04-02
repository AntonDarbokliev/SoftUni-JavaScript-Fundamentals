function movies(arr) {
  class Movie {
    constructor(name, director, date) {
      this.name = name;
      this.director = director;
      this.date = date;
    }
  }

  let movieArr = [];

  for (let movieInfo of arr) {
    movieInfo = movieInfo.split(" ");

    if (movieInfo.includes("addMovie")) {
      let movieName = movieInfo.slice(1).join(" ");
      let newMovie = new Movie(movieName);
      movieArr.push(newMovie);
    } else if (movieInfo.includes("directedBy")) {
      let index = movieInfo.indexOf(`directedBy`);
      let movieName = movieInfo.slice(0, index).join(" ");
      let director = movieInfo.slice(index + 1).join(" ");
      for(let movie of movieArr){

      if (Object.values(movie).includes(movieName)) {
            movie.director = director
      }

    }
    }else if(movieInfo.includes("onDate")){
let index = movieInfo.indexOf("onDate")
let movieName = movieInfo.slice(0,index).join(" ")
let date = movieInfo.slice(index + 1).join(" ");

for(let movie of movieArr){
if(Object.values(movie).includes(movieName)){
    movie.date = date
}


}
    }
  }
for(let movie of movieArr){
    if(movie.name!== undefined&&movie.director!==undefined&movie.date!==undefined){
        console.log(JSON.stringify(movie));
    }
 
}



}
movies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ]);
