import { Component } from '@angular/core';
import { ChartOptions } from "../main-dashboard/chart.options";

@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.css']
})
export class AnalyticComponent {
  chartOptions: Partial<ChartOptions> = {};


}
