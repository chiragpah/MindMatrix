import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  isModalOpen:boolean=false;
 
  
  signupModalVisible:boolean=false
  openLoginModal(){
    this.isModalOpen= !this.isModalOpen
    this.signupModalVisible=false
  }
  toggleSignupModal(abvh:string) {
    console.log("we are inside it",abvh);
    
    this.signupModalVisible = true
    this.isModalOpen= !this.isModalOpen
  }
  toggleLoginModal() {
    this.signupModalVisible = !this.signupModalVisible;
    this.isModalOpen= !this.isModalOpen;
}
}
