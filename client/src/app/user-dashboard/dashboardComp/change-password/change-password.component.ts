import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  changePassword(): void {
    if (this.changePasswordForm.valid) {
      const formData = this.changePasswordForm.value;

      // Ensure that new password and confirm password match
      if (formData.newPassword === formData.confirmPassword) {
        // Make API call to change password
        this.userService.changePassword(formData).subscribe({
          next: (response) => console.log('Password changed successfully', response),
          error: (error) => console.error('Error changing password', error)
        });
      } else {
        console.error('New password and confirm password do not match');
      }
    } else {
      console.error('Form is not valid');
    }
  }
}
