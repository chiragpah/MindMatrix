import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor() { }

  private errorMessageSubject=new Subject<string>
  errorMessagr$=this.errorMessageSubject.asObservable();
  setError(message:string){
    this.errorMessageSubject.next(message);
  }
  clearError(){
    this.errorMessageSubject.next('')
  }
  }

