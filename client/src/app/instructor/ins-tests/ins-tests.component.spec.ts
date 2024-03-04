import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsTestsComponent } from './ins-tests.component';

describe('InsTestsComponent', () => {
  let component: InsTestsComponent;
  let fixture: ComponentFixture<InsTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsTestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
