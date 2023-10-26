import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  emailExists(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`)
  }
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/users`, { email, password });
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }

  setAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }
  isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }
  clearAuthToken(): void {
    localStorage.removeItem('authToken');
  }

}

