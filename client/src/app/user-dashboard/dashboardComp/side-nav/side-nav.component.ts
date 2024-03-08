import { Component,OnInit } from '@angular/core';
import {
  faDashboard,
  faUser,
  faPlusCircle,
  faBook,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faUser = faUser;
  faPlusCircle = faPlusCircle;
  faBook = faBook;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
}