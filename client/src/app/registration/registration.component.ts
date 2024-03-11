import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validation } from './validation';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../services/registration.service';

import { response } from 'express';
import { error } from 'console';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: '../login/login.component.css'
})
export class RegistrationComponent {
  registrationform!: FormGroup;
  @ViewChild('RegistrationModal') RegistrationModal!: ElementRef;
  validation: Validation = new Validation();
  @Input() showModal: boolean = false;
  @Output() switchToLoginClicked = new EventEmitter<void>();
  failure: boolean = false;
  failureMessage: string = '';
  errorhandler: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private registrationService: RegistrationService
  ) { }
  switchToLogin() {
    this.switchToLoginClicked.emit();
  }
  get f() {
    return this.registrationform.controls;
  }


  ngOnInit(): void {
    this.registrationform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), this.validation.nameValidator]],

      email: ['', [Validators.required, this.validation.emailValidator]],

      password: ['', [Validators.required, Validators.minLength(8), this.validation.passwordValidator]],


    });
  }
  onSubmit() {
    if (this.registrationform.invalid) {
      alert("Failure")
    }
    else {
      this.registrationService.register(this.f['name'].value, this.f['email'].value, this.f['password'].value).subscribe(response => {
        console.log(response.activationToken);

        this.route.navigate(['/otp', { access_token: response.activationToken }]);
        console.log(this.registrationform.value); // Submit the form data
        this.closeModal()
      },
        (error) => {
          console.error("Registration Error:", error);
          let errorMessage = "Email already Exist";
          if (error.status === 401) {
            errorMessage = "Unauthorized access. Please check your credentials.";
          } else if (error.status === 500) {
            errorMessage = "Internal server error. Please try again later.";
          }
          alert(errorMessage)
        })
    }
  }

  closeModal() {
    const modal = this.RegistrationModal.nativeElement as HTMLElement;
    modal.style.display = 'none';
  }

}
