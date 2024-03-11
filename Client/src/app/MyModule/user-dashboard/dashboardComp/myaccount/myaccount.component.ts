import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../../Services/user/user.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  profileForm: FormGroup;
  profilePhoto: File | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.profileForm = this.fb.group({
      fullName: [''],
      email: [''],
      profilephoto: [''] // Add the profilephoto field to the form
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userService.getUser().subscribe({
      next: (data) => {
        this.profileForm.patchValue({
          fullName: data.user.name,
          email: data.user.email,
        });
      },
      error: (error) => console.error(error)
    });
  }

  selectProfilePhoto(): void {
    const input = document.getElementById("profilePhoto") as HTMLInputElement;
    input.click();
  }

  previewProfilePhoto(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.profilePhoto = file;
      this.previewPhoto();
    }
  }

  deleteProfilePhoto(): void {
    this.profilePhoto = null;
    this.previewDefaultPhoto();
  }

  previewPhoto(): void {
    const preview = document.getElementById("profilePhotoPreview") as HTMLImageElement;
    const reader = new FileReader();
    reader.onload = function (e) {
      if (e.target && e.target.result) {
        preview.src = e.target.result.toString();
      }
    };
    reader.readAsDataURL(this.profilePhoto);
  }

  previewDefaultPhoto(): void {
    const preview = document.getElementById("profilePhotoPreview") as HTMLImageElement;
    preview.src = "../../../../../assets/images/avatar.png";
  }

  updateProfile(): void {
    const formData = {
      // Include the profile photo in the formData
      name: this.profileForm.get('fullName').value,
      email: this.profileForm.get('email').value,
      photo: this.profilePhoto
      // Include other form fields as needed
    };
    console.log("File Name:", this.profilePhoto?.name);
console.log("File Type:", this.profilePhoto?.type);
console.log("File Size:", this.profilePhoto?.size);
// ... other properties

    console.log("photota is "+formData)
    this.userService.updateUser(formData).subscribe({
      next: (response) => {
        console.log('User updated successfully', response);
        // Update the UI or perform additional actions if needed
      },
      error: (error) => console.error('Error updating user', error)
    });
  }
}
