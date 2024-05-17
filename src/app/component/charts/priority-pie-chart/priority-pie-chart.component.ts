import { Component, Input, ViewChild } from '@angular/core';
import { PieChartComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-priority-pie-chart',
  templateUrl: './priority-pie-chart.component.html',
  styleUrl: './priority-pie-chart.component.scss'
})
export class PriorityPieChartComponent {
  @Input() values: any[] = [];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
