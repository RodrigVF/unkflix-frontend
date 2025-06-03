import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserLogin, UserResponse } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    login(userData: UserLogin): Observable<UserResponse> {
        return this.http.post<UserResponse>(`${this.apiUrl}/auth/login`, userData);
    }
}
