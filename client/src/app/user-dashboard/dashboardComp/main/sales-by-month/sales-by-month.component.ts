import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AdminService } from '../../../../../../services/admin.service';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss'],
})
export class SalesByMonthComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325,
    },
    title: {
      text: 'Month wise sales',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Number of User Purchased Course',
      },
    },
    series: [
      {
        name: 'User Enrolled',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ],
    credits: {
      enabled: false,
    },
  });
  // chart!:Chart;
  analyticsData!:any;
 categories:any;
 counts:any;
  constructor(private adminService:AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllUserData().subscribe(response=>{
      this.analyticsData=response;
      console.log(this.analyticsData);
      this.categories = this.analyticsData.users.last12Months.map((data: any) => data.month);
      console.log(this.categories);
       
     this.counts = this.analyticsData.users.last12Months.map((data: { count: any; }) => data.count);
      // this.chart = new Chart({
      //   chart: { type: 'line',
      //       height: 325,
      //       },
      //       title: {
      //             text: 'Month wise sales',
      //      },
      //      xAxis: {
      //            categories: this.categories,
      //      },
      //       yAxis: {
      //       title: {
      //         text: 'Number of User Purchased Course',
            
      //       },
      //     },
      //     series: [{
      //       name: 'User Enrolled',
      //       data: this.counts,
      //     } as any] ,

           
      // })
    })
  }
}
