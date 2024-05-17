import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartManagmentComponent } from './chart-managment.component';

describe('ChartManagmentComponent', () => {
  let component: ChartManagmentComponent;
  let fixture: ComponentFixture<ChartManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
