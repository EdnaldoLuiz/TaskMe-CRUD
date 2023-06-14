import { Component, Input } from '@angular/core';
import { ApexChart, ApexResponsive, ChartType } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  chartOptions = {
    series: [
      {
        name: 'Usuários',
        data: this.generateRandomData(4),
      }
    ],
    chart: {
      type: 'bar' as ChartType,
      foreColor: '#ffffff'
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

  generateRandomData(count: number): number[] {
    const data: number[] = [];
    for (let i = 0; i < count; i++) {
      data.push(Math.floor(Math.random() * 100));
    }
    return data;
  }
}
