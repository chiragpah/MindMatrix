import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent {

  email: string;
  otp: number;
  newPassword: string;

  constructor() { }

  submit() { }

}
