import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/logged/header/header.component';
import { CardComponent } from '../../../components/logged/card/card.component';
import { Movie } from '../../../interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, CardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (error) => {
        console.error('Error loading movies:', error);
      }
    });
  }
}
