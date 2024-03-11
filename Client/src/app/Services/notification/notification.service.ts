// notification.service.ts
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root', // This makes the service a singleton and available throughout the app
})
export class NotificationService {
  private apiUrl = 'http://localhost:3000/api/v1'; // Replace with your API endpoint

  constructor(private http: HttpClient,
              private cookieService:CookieService) {}

  getNotifications(): Observable<any> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    return this.http.get<any>(`${this.apiUrl}/get-all-notifications`,{headers});
  }
  postNotification(notificationData: any): Observable<any> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    return this.http.post<any>(`${this.apiUrl}/post-notification`, notificationData,{headers});
  }
  deleteNotification(notificationId: string): Observable<any> {
    const cookieValue = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });

    return this.http.delete<any>(`${this.apiUrl}/delete-notification/${notificationId}`, { headers });
  }
}
