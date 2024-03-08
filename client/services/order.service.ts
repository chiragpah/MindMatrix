import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient,private cookieService: CookieService) { }
  cookieValue = this.cookieService.get('access_token');

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    access_token: `${this.cookieValue}`,
  });



  createOrder():Observable<any>{
    console.log('the cookie value is ' + this.cookieValue);
 return this.http.post(`${this.apiUrl}/create-order`,{headers:this.headers});
  }

}
