import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-timeline',
  templateUrl: './course-timeline.component.html',
  styleUrl: './course-timeline.component.css'
})
export class CourseTimelineComponent {
  @Input() moduleData!: any[];
  @Input() isEditable:boolean=false;
  @Output() editClick=new EventEmitter<any>();
  ngOnInit(){
    for(let module of this.moduleData){
      // console.log("MODULE",module);
      
      if(module.content){
        module.lessons=module.content;
      }
    }
  }
  editModule(i:number){
    this.editClick.emit(i);
  }
}
