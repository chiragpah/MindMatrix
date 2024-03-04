import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsCourseCardComponent } from './ins-course-card.component';

describe('InsCourseCardComponent', () => {
  let component: InsCourseCardComponent;
  let fixture: ComponentFixture<InsCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsCourseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
