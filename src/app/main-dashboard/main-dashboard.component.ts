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
    responsive: ApexResponsive[],
    colors: string[],
    dataLabels: {
      style: {
        colors: string[]
      }
    }
  } = {
      series: [28.4, 35.5, 8.4, 27.7],
      chart: {
        type: "donut" as ChartType,
        foreColor: "#ffffff"
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
      ],
      colors: ['#ffffff', '#00ff00', '#0000ff', '#ffff00'],
      dataLabels: {
        style: {
          colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        }
      }
    };
}
