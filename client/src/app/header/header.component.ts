import { Component,Output,EventEmitter, DoCheck } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck {

  isloggedin:boolean=false;
  constructor(private cookieService: CookieService,private loginService:LoginService ) { // Inject CookieService
    loginService.checkLoginStatus();
  }
 @Output() openLoginModalEvent=new EventEmitter<void>();
 
  openLoginModal(){
    this.openLoginModalEvent.emit()
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
