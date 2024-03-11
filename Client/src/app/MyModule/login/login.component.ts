import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Validation } from './validations';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../Services/login/login.service';
import { ErrorHandlerService } from '../../Services/error/error-handler.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() switchToSignupClicked= new EventEmitter<any>();
  constructor(
    private router: Router,
     private loginService:LoginService,
    private formBuilder: FormBuilder,
     private errorhandler:ErrorHandlerService,
     private cookieService:CookieService
  )
  {}
  @Output() launchLogin = new EventEmitter<void>();

  loginform!: FormGroup;
  validation: Validation = new Validation();
  isFormSubmitted = false;
  @Input() showModal: boolean = false;
  switchToSignup() {
    console.log('hellow ehave ajfas');
    this.switchToSignupClicked.emit("abhishek");
    console.log("after emit");
    
  }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, this.validation.emailValidator]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.passwordValidator,
        ],
      ],
    });

    // Track form status changes
    this.loginform.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        console.log("is valied is false")
        this.isFormSubmitted = false; // Reset the flag when the form becomes valid
      }
    });
  }

  passwordValidator(control: FormControl) {
    // Password should contain at least 1 uppercase letter and 1 special character

    const passwordRegex: RegExp =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (passwordRegex.test(control.value) || control.value == '') {
      return null; // Valid password
    }

    return {
      invalidPassword: true,
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
       console.log(response);
       this.cookieService.set('access_token', response.accessToken);
                 this.cookieService.set('refresh_token', response.refreshToken);
        this.loginService.checkLoginStatus()
     },
     error=>{
       this.errorhandler.setError("Invalid username or password")
     })
   
   }
}
