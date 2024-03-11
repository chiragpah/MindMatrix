// comment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/api/v1'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  addComment(courseId: string, contentId: string, commentData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = `${this.apiUrl}/add-comment/${courseId}/${contentId}`;
    return this.http.post<any>(url, commentData, { headers });
  }

  addReply(courseId: string, contentId: string, replyData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = `${this.apiUrl}/add-reply/${courseId}/${contentId}`;
    return this.http.post<any>(url, replyData, { headers });
  }
}
