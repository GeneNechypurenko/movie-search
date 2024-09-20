import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MovieService]
})
export class AppComponent {
  movieTitle: string = '';
  movieData: any = null;
  errorMessage: string = '';
  isExpanded = false;

  constructor(private movieService: MovieService) { }

  searchMovie(): void {
    this.errorMessage = '';
    this.movieService.getMovieData(this.movieTitle).subscribe(data => {
      if (data.Response === 'True') {
        this.movieData = data;
      } else {
        this.movieData = null;
        this.errorMessage = 'Movie not found. Please try again with a different title.';
      }
    }, error => {
      this.errorMessage = 'An error occurred. Please try again later.';
    });
    this.isExpanded = true;
  }
}
