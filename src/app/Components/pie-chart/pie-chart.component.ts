import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['Foreigner', 'Indian'],
      datasets: [
        {
          data: [30, 70],
          backgroundColor: ['#5155c3', '#f68a57'],
          hoverBackgroundColor: ['#5155c3', '#f68a57'],
        },
      ],
    };

    this.options = {
      aspectRatio: 2.2,
      cutout: '60%',
      plugins: {
        legend: {
          position: 'none',
          labels: {
            color: 'black',
          },
        },
      },
    };
  }
}
