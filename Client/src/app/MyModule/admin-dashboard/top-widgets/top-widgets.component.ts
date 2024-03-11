// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-top-widgets',
//   templateUrl: './top-widgets.component.html',
//   styleUrl: './top-widgets.component.css'
// })
// export class TopWidgetsComponent {

// }
import { Component, OnInit } from '@angular/core';
// import {
//   faUser,
//   faBook,
//   faCartShopping,
//   faMoneyBill,
// } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss'],
})
export class TopWidgetsComponent implements OnInit {
  // faUser = faUser;
  // faBook = faBook;
  // faCart = faCartShopping;
  // faMoneyBill = faMoneyBill;

  constructor() {}

  ngOnInit(): void {}
}
