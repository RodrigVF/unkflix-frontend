import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private apiUrl = 'http://localhost:8080/unkflix/auth/validate';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  canActivate(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(this.apiUrl, { headers }).pipe(
      map(() => true),
      catchError(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
