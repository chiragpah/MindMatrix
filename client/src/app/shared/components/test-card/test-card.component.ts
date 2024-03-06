import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../types/course.type';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.css'],
})
export class TestCardComponent {
  @Input() test: any;
  @Input() type:string='instructor';
  @Input() index:number=-1;
  @Output() onclick=new EventEmitter()
  constructor(private router: Router) {}
  startTest(){
    this.router.navigate(['quizzes','test',this.test._id])
  }
  editTest(){

  }
}
