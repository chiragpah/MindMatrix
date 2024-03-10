import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountComponent } from './my-account.component';

describe('MyAccountComponent', () => {
  let component: MyaccountComponent;
  let fixture: ComponentFixture<MyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
