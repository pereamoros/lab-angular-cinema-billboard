import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  movies: Array<{}>;
  
  constructor(private cinema: MoviesService) { 
    this.movies = cinema.getMovies();
  }

  ngOnInit() {
  }


}
