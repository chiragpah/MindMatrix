import { Component } from '@angular/core';
import {
  faUser,
  faBook,
  faCartShopping,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.css'
})
export class TopWidgetsComponent {
  faUser = faUser;
  faBook = faBook;
  faCart = faCartShopping;
  faMoneyBill = faMoneyBill;

  constructor() {}

  ngOnInit(): void {}
}
