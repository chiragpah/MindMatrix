import { Component, Input,Output,EventEmitter,ViewChild,ElementRef} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validation } from './validation';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from '../../../services/login.service';
import {ErrorhandlerService } from './errorhandler.service';
import { response } from 'express';
import { CookieService } from 'ngx-cookie-service';
import log from 'video.js/dist/types/utils/log';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() switchToSignupClicked = new EventEmitter<void>();
  @ViewChild('loginModal') loginModal!: ElementRef;
  constructor(
    private router: Router,
    private loginService:LoginService,
    private formBuilder: FormBuilder,
    private errorhandler:ErrorhandlerService,
    private cookieService:CookieService
  ) {
  
  }
  @Output() launchLogin = new EventEmitter<void>();

  loginform!: FormGroup;
  validation:Validation=new Validation();
  
  
  
  @Input() showModal: boolean = false;
  switchToSignup() {
    
    this.switchToSignupClicked.emit();
  }

  switchToForgotPassword() 
  {
    console.log("In Forgot");
    this.closeModal()
     
    
  }








  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
     
      email: ['', [Validators.required, this.validation.emailValidator]],
     
      password: ['', [Validators.required, Validators.minLength(8),this.passwordValidator]],
     
    });
   
  }

  
  passwordValidator(control: FormControl) {
    // Password should contain at least 1 uppercase letter and 1 special character
    
    const passwordRegex :RegExp= /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (passwordRegex.test(control.value) || control.value == '') {
      
      return null // Valid password
    } 
        
   return { 
        invalidPassword: true 
      }; // Invalid password
    
  }
  
  LaunchEvent() {
    this.launchLogin.emit();
  }
 
  get f() {
    return this.loginform.controls;
  }
  onSubmit(){
  
    this.loginService.login(this.f['email'].value,this.f['password'].value).subscribe(response=>{
      
      console.log(response.access_token,response);
       this.cookieService.set('access_token', response.accessToken);

      this.cookieService.set('refresh_token', response.refreshToken);
      this.closeModal()
  
    },
    error=>{
      this.errorhandler.setError("Invalid username or password")
    })

  }
  closeModal(){
    const modal = this.loginModal.nativeElement as HTMLElement;
    modal.style.display = 'none';
  }


}
  

