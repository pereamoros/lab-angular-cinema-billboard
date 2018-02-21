import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  movies: Array<{}>;
  constructor() { }

  getMovies(){
    return this.movies;
  }

  getMovie(id){
    let movie = this.movies.find((elem)=>{
      return elem.id = id;
    });
    return movie;
  }
}
