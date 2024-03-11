import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  currentComponent: number = 1;
  gottheComp(comp: any) {
    this.currentComponent = comp;
    console.log('we got the comp as ' + this.currentComponent);
  }
}
