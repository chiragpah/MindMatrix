import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss'],
})
export class SalesByCategoryComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325,
    },
    title: {
      text: 'Course wise sales',
    },
    xAxis: {
      categories: [
        'Angular',
        'Javascript',
        'Python',
        'React',
        'VB.Net',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in %',
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Angular',
            y: 41.0,
            color: '#044342',
          },
          {
            name: 'JavaScript',
            y: 33.8,
            color: '#7e0505',
          },
          {
            name: 'Python',
            y: 6.5,
            color: '#ed9e20',
          },
          {
            name: 'React',
            y: 15.2,
            color: '#6920fb',
          },
          {
            name: 'VB.Net',
            y: 3.5,
            color: '#121212',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  });

  constructor() {}

  ngOnInit(): void {}
}
