import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/v1'; // Change this to your actual API URL

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  // Method to fetch user data
  getUser(): Observable<any> {
    console.log('we are called the get user in frontend');
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    return this.http.get(`${this.apiUrl}/me`, { headers });
  }

  updateUser(data: any): Observable<any> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is inside update user is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    return this.http.put(`${this.apiUrl}/update-user-info`, data, { headers });
  }

  changePassword(data: any): Observable<any> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    console.log(
      'form data is ' + data.currentPassword + ' ' + data.newPassword
    );
    return this.http.put(`${this.apiUrl}/update-user-password`, data, {
      headers,
    });
  }
  logOut(): Observable<any> {
    console.log('inside log out');

    const cookieValue = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    this.cookieService.delete('access_token');
    this.cookieService.delete('refresh_token');
    return this.http.get('${this.apiUrl}/logout', { headers });
  }
}
