import { Component, Output, EventEmitter, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck {
  @ViewChild('yourDiv', { static: true }) yourDiv!: ElementRef;
  isloggedin: boolean = false;
  constructor(private cookieService: CookieService, private loginService: LoginService) { // Inject CookieService
    loginService.checkLoginStatus();
  }

  @Output() openLoginModalEvent = new EventEmitter<void>();

  openLoginModal() {
    this.openLoginModalEvent.emit()
  }
  openSidebar() {
    const divElement: HTMLElement = this.yourDiv.nativeElement;
    divElement.style.display = 'block';
  }
  closeSidebar() {
    const divElement: HTMLElement = this.yourDiv.nativeElement;
    divElement.style.display = 'none';
  }
  ngDoCheck() {
    this.isloggedin = this.loginService.checkLoginStatus();
  }
  // checkLoginStatus() {
  //   this.isloggedin = this.loginService.checkLoginStatus();
  // }

  activeLink: string | null = null;

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
