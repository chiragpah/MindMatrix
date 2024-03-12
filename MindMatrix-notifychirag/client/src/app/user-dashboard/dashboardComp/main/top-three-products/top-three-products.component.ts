import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AdminService } from '../../../../../../services/admin.service';
import log from 'video.js/dist/types/utils/log';
@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss'],
})
export class TopThreeProductsComponent implements OnInit {
  chart!: Chart;
  randomColors = ['#044342', '#7e0505', '#ed9e20'];
  categories: any;
  // chart = new Chart({
  //   chart: {
  //     type: 'bar',
  //     height: 225,
  //   },
  //   title: {
  //     text: 'Top 3 Products',
  //   },
  //   xAxis: {
  //     categories: [
  //       'Lenova Thinkpad E15',
  //       'Nectar Orange Juice',
  //       'Axe Deodarant',
  //     ],
  //   },
  //   yAxis: {
  //     title: {
  //       text: '',
  //     },
  //   },
  //   series: [
  //     {
  //       type: 'bar',
  //       showInLegend: false,
  //       data: [
  //         {
  //           name: 'Lenova Thinkpad E15',
  //           y: 395,
  //           color: '#044342',
  //         },
  //         {
  //           name: 'Nectar Orange Juice',
  //           y: 385,
  //           color: '#7e0505',
  //         },
  //         {
  //           name: 'Axe Deodarant',
  //           y: 275,
  //           color: '#ed9e20',
  //         },
  //       ],
  //     },
  //   ],
  //   credits: {
  //     enabled: false,
  //   },
  // });

  constructor(private adminService:AdminService) {}

 
  ngOnInit(): void {
    this.adminService.getAllCourse().subscribe(response=>{
      console.log(response.courses[0]);
      response.courses.sort((a: { purchased: number; }, b: { purchased: number; }) => b.purchased - a.purchased);
      const top3Courses = response.courses.slice(0, 3);
      console.log(top3Courses);
       this.categories = top3Courses.map((course: { name: any; }) => course.name);
      console.log(this.categories);
      const chartData = top3Courses.map((course: {
        name: any; title: any; purchased: any; 
        }) => ({
        name: course.name,
        y: course.purchased
      }));
      console.log(chartData);
      this.chart = new Chart({
        chart: {
          type: 'bar',
          height: 225,
        },
        title: {
          text: 'Top 3 Products',
        },
        xAxis: {
          categories: this.categories,
        },
        yAxis: {
          title: {
            text: '',
          },
        },
        series: [
          {
            type: 'bar',
            showInLegend: false,
            data: chartData.map((item: any, index: number) => ({
              ...item,
              color: this.randomColors[index % this.randomColors.length], // Use random color
            })),
          },
        ],
        credits: {
          enabled: false,
        },
      })
    })
  }
  
 
}









  