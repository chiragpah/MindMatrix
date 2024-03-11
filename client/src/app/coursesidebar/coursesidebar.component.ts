import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coursesidebar',
  templateUrl: './coursesidebar.component.html',
  styleUrl: '../courseplayer/courseplayer.component.css'
})
export class CoursesidebarComponent implements OnInit {
  @Input() courseList: any;
  @Output() videoSelected = new EventEmitter<any>();
  selectedCourseIndex: number = 0;
  isSelected: boolean = false;
  ngOnInit() {

    console.log(this.courseList);

    // if (this.courseList && this.courseList.length > 0) {
    //   this.selectVideo(this.courseList);
    //   console.log(this.courseList, "Dxsax");

  }

  selectVideo(video: any) {
    console.log(video);
    this.isSelected = true;
    this.videoSelected.emit(video); // Emit the selected video ID or URL
  }



}
