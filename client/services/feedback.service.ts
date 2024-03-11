import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  private apiUrl = 'http://localhost:3000/api/v1/add-review';
  submitFeedback(formData: any, courseId: any): Observable<any> {

    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    console.log(formData);

    return this.http.put<any>(`${this.apiUrl}/${courseId}`, formData, { headers });
  }
}
