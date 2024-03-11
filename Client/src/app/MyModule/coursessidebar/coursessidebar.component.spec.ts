import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursessidebarComponent } from './coursessidebar.component';

describe('CoursessidebarComponent', () => {
  let component: CoursessidebarComponent;
  let fixture: ComponentFixture<CoursessidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursessidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursessidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
