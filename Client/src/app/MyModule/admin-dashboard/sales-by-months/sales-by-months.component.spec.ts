import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByMonthsComponent } from './sales-by-months.component';

describe('SalesByMonthsComponent', () => {
  let component: SalesByMonthsComponent;
  let fixture: ComponentFixture<SalesByMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesByMonthsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesByMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
