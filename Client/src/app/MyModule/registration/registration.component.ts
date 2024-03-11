import { SocketService } from './../../Services/socket/socket.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Validation } from './validations';
import { RegistrationService } from '../../Services/auth/registration.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: '../login/login.component.css',
})
export class RegistrationComponent {
  registrationform!: FormGroup;
  validation: Validation = new Validation();
  @Input() showModal: boolean = false;
  @Output() switchToLoginClicked = new EventEmitter<void>();
  constructor(
    private cookieService: CookieService,
    private formBuilder: FormBuilder,
    private registrationService:RegistrationService,
    private socketService:SocketService) {}
  switchToLogin() {
    console.log('hello');

    this.switchToLoginClicked.emit();
  }
  get f() {
    return this.registrationform.controls;
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
  ngOnInit(): void {
    this.registrationform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],

      email: ['', [Validators.required, this.validation.emailValidator]],

      password: [
        '',
        [Validators.required, Validators.minLength(8), this.passwordValidator],
      ],
    });
  }


  onSubmit() {
    if (this.registrationform.valid) {
      const userData = this.registrationform.value;
  
      // Call the registration service to post data
      this.registrationService.register(userData).subscribe(
        (response) => {
          console.log('Registration successful', response);
          console.log('Registration successful', response.data.user.name);
  
          // Emit the event after successful registration
          console.log("we are emmiting the event "+response.data)
          this.socketService.emit('notification', { user: response});
  
        },
        (error) => {
          console.error('Registration failed', error);
          // Handle error, e.g., show an error message
        }
      );
    }
  }
  
}
