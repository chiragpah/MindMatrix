import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTimelineComponent } from './course-timeline.component';

describe('CourseTimelineComponent', () => {
  let component: CourseTimelineComponent;
  let fixture: ComponentFixture<CourseTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
