import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  
  movie: Object;
  movieId: number;

  constructor(private cinema: MoviesService, private route: ActivatedRoute) { 
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
    this.movie = cinema.getMovie(this.movieId);
  }

  ngOnInit() {
    
  }

}
