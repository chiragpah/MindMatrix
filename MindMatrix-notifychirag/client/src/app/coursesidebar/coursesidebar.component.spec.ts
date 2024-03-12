import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesidebarComponent } from './coursesidebar.component';

describe('CoursesidebarComponent', () => {
  let component: CoursesidebarComponent;
  let fixture: ComponentFixture<CoursesidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
