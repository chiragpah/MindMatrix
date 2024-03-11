import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsTemplateComponent } from './user-details-template.component';

describe('UserDetailsTemplateComponent', () => {
  let component: UserDetailsTemplateComponent;
  let fixture: ComponentFixture<UserDetailsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
