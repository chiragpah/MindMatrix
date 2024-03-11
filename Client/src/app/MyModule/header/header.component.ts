import { Component, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isloggedin: boolean = false;

  @Output() openLoginModalEvent = new EventEmitter<void>();

  constructor(private cookieService: CookieService) {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const accessToken = this.cookieService.get('access_token');
    this.isloggedin = accessToken !== '';
  }

  openLoginModal() {
    this.openLoginModalEvent.emit();
  }

  // Add a method to update the login status
  updateLoginStatus() {
    this.checkLoginStatus();
  }
}
