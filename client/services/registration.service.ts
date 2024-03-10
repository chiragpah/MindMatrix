import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:3000/api/v1/';  // Change this URL to your server URL

  constructor(private http: HttpClient) {}

  register(name:string,email:string,password:string): Observable<any> {
    const body = {name:name,email:email,password:password};
    console.log(body);

    return this.http.post<any>(`${this.apiUrl}/registration`, body);
  }
}
