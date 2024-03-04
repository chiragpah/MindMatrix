
import { Component, ElementRef, ViewChild } from '@angular/core';
import { StoreService } from '../app/Services/store.service';
import { NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lms-front-ang';
  showSidebar: boolean = false;
  user: any;
  @ViewChild('sidebar') sidebar!: ElementRef;
  constructor(
    private storeService: StoreService,
    private router: Router,
    
  ) {}
  ngOnInit() {
   
    // this.storeService.autoLogin();
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        if (e.url == '/auth/login' || e.url == '/auth/signup') {
          this.showSidebar = false;
        } else {
          this.showSidebar = true;
          if(window.innerWidth<600){
            this.showSidebar = false;
          }
        }
    });
  }
  closeSidebar(){
    this.showSidebar=false;
  }
  openSidebar(){
    this.showSidebar = true;
  }
}

