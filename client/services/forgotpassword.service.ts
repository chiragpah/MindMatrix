import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
  private url='http://localhost:3000/api/v1/forgot-password';
  constructor(private http:HttpClient) { }
  forgotPassword(email:string,password:string,otp:number):Observable<any>{
    console.log(password);
    const body = {email:email,password:password,otp:otp};
    console.log(body); 
    return this.http.post(this.url,body)
    
        
      }
}
