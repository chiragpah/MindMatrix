// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { CookieService } from 'ngx-cookie-service';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoginService {
//   private apiUrl = 'http://localhost:3000/api/v1/login';

//   constructor(private http: HttpClient, private cookieService: CookieService) {}

//   login(email: string, password: string): Observable<any> {
//     const body = { email, password };
//     const accessToken = 'abhishek';

//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'access_token': 'chirag'
//     })
 
//     return this.http.post<any>(this.apiUrl, body, { headers:headers }).pipe(
//       map((response) => {
//         if (response && response.accessToken && response.refreshToken) {
//           // Store the access token in cookies
//           this.cookieService.set('access_token', response.accessToken);
//           this.cookieService.set('refresh_token', response.refreshToken);
//         }

//         return response;
//       }),
//       catchError((error) => {
//         throw error;
//       })
//     );
//   }
// }







import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  private url='http://localhost:3000/api/v1/login';
  constructor(private http:HttpClient,private cookieService:CookieService) { }
  login(email:string,password:string):Observable<any>{
    console.log(typeof email);
    const body = {email:email,password:password};
    console.log(body);
    
    const cookieValue = 'abc';

    // Set the request headers including the cookie
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'access_token': `${cookieValue}` 
    // });
    
    return this.http.post(this.url,body)
    
        
      }
      checkLoginStatus() {
        const accessToken = this.cookieService.get('access_token');
        
        return accessToken !== '';
      }
  
 
  }