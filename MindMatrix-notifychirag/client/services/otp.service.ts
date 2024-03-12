import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/api/v1/activate-user';
  activateUser(activation_token:any,activation_code:any):Observable<any>{
    console.log(activation_token,activation_code);
    const body = {activation_token:activation_token,activation_code:activation_code};
    return this.http.post(this.apiUrl,body);


  }
}
