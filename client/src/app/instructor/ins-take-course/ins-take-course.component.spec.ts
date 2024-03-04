import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsTakeCourseComponent } from './ins-take-course.component';

describe('InsTakeCourseComponent', () => {
  let component: InsTakeCourseComponent;
  let fixture: ComponentFixture<InsTakeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsTakeCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsTakeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
