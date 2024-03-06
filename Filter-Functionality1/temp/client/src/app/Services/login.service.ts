import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url='http://localhost:3000/api/v1/login';
  constructor(private http:HttpClient){}
    //private cookieService:CookieService) { }
  login(email:string,password:string):Observable<any>{
    console.log(typeof email);
    const body = {email:email,password:password};
    console.log(body);
    
    const cookieValue = 'abc';

    // Set the request headers including the cookie
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': `${cookieValue}` 
    });
    
    return this.http.post(this.url,body,{headers:headers})
    
        
      }
      // checkLoginStatus() {
      //   const accessToken = this.cookieService.get('access_token');
      //   return accessToken !== '';
      // }
  
 
}

