import { Component, Input } from '@angular/core';
import { ApexChart, ApexResponsive, ChartType } from 'ng-apexcharts';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {

  chartOptions: {
    series: any[],
    chart: ApexChart,
    labels: string[],
    responsive: ApexResponsive[]
  } = {
      series: [44, 55, 13, 43],
      chart: {
        type: "donut" as ChartType
      },
      labels: ['Meditação', 'Estudos', 'Entretenimento', 'Esportes'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
}
