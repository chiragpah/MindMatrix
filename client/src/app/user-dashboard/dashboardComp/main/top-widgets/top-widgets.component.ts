import { Component } from '@angular/core';
import {
  faUser,
  faBook,
  faCartShopping,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { AdminService } from "../../../../../../services/admin.service";
import { OrderService } from '../../../../../../services/order.service';
import { response } from 'express';

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
  userCount:any;
  courseCount:any;
  orderCount:any;
  revenue:number=0;
  constructor(private adminService:AdminService,private orderService:OrderService) {}

  ngOnInit(): void {
    this.adminService.getAllUser().subscribe(response=>{
     this.userCount=response.users.length;
      
    })
    this.adminService.getAllCourse().subscribe(response=>{
      this.courseCount=response.courses.length;
    })
    this.adminService.getAllOrders().subscribe(response=>{
      this.orderCount=response.orders.length;
      for(const order of response.orders)
      {
        this.revenue=this.revenue+order.payment_info.price;
      }
    })
   

}
}
