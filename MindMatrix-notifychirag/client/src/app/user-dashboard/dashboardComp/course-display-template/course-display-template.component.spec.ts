import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDisplayTemplateComponent } from './course-display-template.component';

describe('CourseDisplayTemplateComponent', () => {
  let component: CourseDisplayTemplateComponent;
  let fixture: ComponentFixture<CourseDisplayTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDisplayTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseDisplayTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
