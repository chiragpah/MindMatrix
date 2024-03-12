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
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

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
          next: (response) => {
            console.log('Password changed successfully', response);
            // Optionally reset the form after successful password change
            this.changePasswordForm.reset();
          },
          error: (error) => console.error('Error changing password', error)
        });
      } else {
        console.error('New password and confirm password do not match');
      }
    } else {
      console.error('Form is not valid');
    }
  }
onsubmit(){
  alert("password changed successfully")
  window.location.reload();
}
  toggleCurrentPasswordVisibility(): void {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleNewPasswordVisibility(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
