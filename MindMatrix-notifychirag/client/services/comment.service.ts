// comment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/api/v1'; // Replace with your API endpoint

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  addComment(courseId: string, contentId: string, commentData: any): Observable<any> {
    console.log("we are calling the service")
    const cookieValue = this.cookieService.get('access_token');
    console.log(contentId);

    const body = {
      "comment": commentData,
      "courseId": courseId,
      "contentId": contentId

    }
    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    const url = `${this.apiUrl}/add-comment`;
    return this.http.put<any>(url, body, { headers });
  }

  addReply(courseId: string, contentId: string, replyData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = `${this.apiUrl}/add-reply/${courseId}/${contentId}`;
    return this.http.post<any>(url, replyData, { headers });
  }
  getComments(courseId: string, contentId: string): Observable<any> {
    const cookieValue = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    const params = {
      courseId: courseId,
      contentId: contentId
    };
    const options = { headers, params };
    const url = `${this.apiUrl}/get-comments`;
    return this.http.get<any>(url, options);
  }
  
  
}