import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyaccountComponent implements OnInit {
  // previewProfilePhoto() {
  //   const file = document.getElementById("profilePhoto").files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = function(e) {
  //       document.getElementById("profilePhotoPreview").src = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
  
  // deleteProfilePhoto() {
  //   document.getElementById("profilePhotoPreview").src = "path/to/default/avatar.png";
  //   document.getElementById("profilePhoto").value = ""; // Clear the file input
  // }

  profileForm: FormGroup;
  // Assuming you have a method to handle file inputs
  profilePhoto: File | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.profileForm = this.fb.group({
      fullName: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userService.getUser().subscribe({
      next: (data) => {
        console.log("value are patched")
        this.profileForm.patchValue({
          fullName: data.user.name,
          email: data.user.email,
        });
      },
      error: (error) => console.error(error)
    });
  }

  updateProfile(): void {
    const formData = {
      name: this.profileForm.get('fullName')?.value,//this.profileForm.get('fullName').value,
      email: this.profileForm.get('email')?.value,
      // Include other form fields as needed
    };
  console.log("calling the service");
  
    this.userService.updateUser(formData).subscribe({
      next: (response) => {
        console.log('User updated successfully', response);
        // Update the UI or perform additional actions if needed
      },
      error: (error) => console.error('Error updating user', error)
    });
  }
  
}
