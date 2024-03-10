import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../../services/admin.service';
@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.scss'],
})
export class LastFewTransactionsComponent implements OnInit {
 
  orders:any;
  constructor(private adminService:AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllOrders().subscribe(response=>{
      console.log(response);
      this.orders=response.orders
    })
 
  }
}
