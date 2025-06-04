import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../../services/movie.service';
import { Category, Streaming } from '../../../interfaces/movie.interface';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent implements OnInit {
  movieForm: FormGroup;
  categories: Category[] = [];
  streamings: Streaming[] = [];
  message: string = '';
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService
  ) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      categories: [[], Validators.required],
      streamings: [[], Validators.required]
    });
  }

  ngOnInit() {
    this.loadCategories();
    this.loadStreamings();
  }

  loadCategories() {
    this.movieService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        this.showMessage('Erro ao carregar categorias', true);
      }
    });
  }

  loadStreamings() {
    this.movieService.getStreamings().subscribe({
      next: (data) => {
        this.streamings = data;
      },
      error: (error) => {
        this.showMessage('Erro ao carregar streamings', true);
      }
    });
  }

  onSubmit() {
    console.log('Form submitted', this.movieForm.value);
    console.log('Form valid:', this.movieForm.valid);
    console.log('Form errors:', this.movieForm.errors);

    if (this.movieForm.valid) {
      const formValue = this.movieForm.value;
      const movieData = {
        title: formValue.title,
        description: formValue.description,
        releaseDate: this.formatDate(formValue.releaseDate),
        rating: formValue.rating,
        categories: [formValue.categories],
        streamings: [formValue.streamings]
      };

      console.log('Sending data:', movieData);

      this.movieService.createMovie(movieData).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.showMessage('Filme cadastrado com sucesso!', false);
          this.movieForm.reset();
        },
        error: (error) => {
          console.error('Error:', error);
          this.showMessage('Erro ao cadastrar filme. Tente novamente.', true);
        }
      });
    } else {
      this.showMessage('Por favor, preencha todos os campos corretamente.', true);
    }
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private showMessage(message: string, isError: boolean) {
    this.message = message;
    this.isError = isError;
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }

  setRating(rating: number) {
    this.movieForm.patchValue({ rating });
  }
}
