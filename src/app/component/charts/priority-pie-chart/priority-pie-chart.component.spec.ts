import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityPieChartComponent } from './priority-pie-chart.component';

describe('PriorityPieChartComponent', () => {
  let component: PriorityPieChartComponent;
  let fixture: ComponentFixture<PriorityPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriorityPieChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriorityPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
