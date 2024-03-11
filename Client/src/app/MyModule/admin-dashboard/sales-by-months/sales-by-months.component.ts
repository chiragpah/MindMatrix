// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sales-by-months',
//   templateUrl: './sales-by-months.component.html',
//   styleUrl: './sales-by-months.component.css'
// })
// export class SalesByMonthsComponent {

// }


import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
     selector: 'app-sales-by-months',
    templateUrl: './sales-by-months.component.html',
     styleUrl: './sales-by-months.component.css'
   })
export class SalesByMonthsComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
