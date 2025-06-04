import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, Category, Streaming } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:8080/unkflix';

  constructor(private http: HttpClient) { }

  createMovie(movie: Partial<Movie>): Observable<Movie> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.post<Movie>(`${this.baseUrl}/movie`, movie, { headers });
  }

  getCategories(): Observable<Category[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get<Category[]>(`${this.baseUrl}/category`, { headers });
  }

  getStreamings(): Observable<Streaming[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get<Streaming[]>(`${this.baseUrl}/streaming`, { headers });
  }

  getMovies(): Observable<Movie[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get<Movie[]>(`${this.baseUrl}/movie`, { headers });
  }
}
