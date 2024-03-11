import { Component } from '@angular/core';
import { ForgotpasswordService } from '../../../services/forgotpassword.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorhandlerService } from '../login/errorhandler.service'
import { Router } from '@angular/router';

// import { Validation } from '../login/validation';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
closeModal() {
throw new Error('Method not implemented.');
}

  email!: string;
  otp!: number;
  newPassword!: string;
  forgotPasswordForm!: FormGroup;
  constructor(private forgotPassword: ForgotpasswordService, private errorhandler: ErrorhandlerService, private fb: FormBuilder, private route: Router) {

    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      otp: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }










  // passwordValidator(control: FormControl) {
  //   // Password should contain at least 1 uppercase letter and 1 special character

  //   const passwordRegex :RegExp= /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  //   if (passwordRegex.test(control.value) || control.value == '') {

  //     return null // Valid password
  //   } 

  //  return { 
  //       invalidPassword: true 
  //     }; // Invalid password

  // }


  submit() {
    if (this.forgotPasswordForm.valid) {

      console.log('Form Submitted');
      console.log('Email:', this.forgotPasswordForm.value.email);
      console.log('New Password:', this.forgotPasswordForm.value.newPassword);
      console.log('OTP:', this.forgotPasswordForm.value.otp);
      this.forgotPassword.forgotPassword(this.forgotPasswordForm.value.email, this.forgotPasswordForm.value.newPassword, this.forgotPasswordForm.value.otp).subscribe(response => {
        alert("Password Updated Success")
        this.route.navigate(['']);
      },
        error => {
          this.errorhandler.setError("Invalid username or password")
          alert("Invalid Otp or EmailID")
        })

    } else {
      // Form is invalid, do something
      console.log('Form is invalid');
      alert("validation Failed")
    }

  }


}

