import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-chart',
  templateUrl: './vertical-chart.component.html',
  styleUrls: ['./vertical-chart.component.css'],
})
export class VerticalChartComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      datasets: [
        {
          type: 'bar',
          label: 'Library',
          backgroundColor: '#f78d59',
          data: [210, 120, 280, 80, 300, 190, 220],
        },
        {
          type: 'bar',
          label: 'Sports ',
          backgroundColor: '#f5b390',
          data: [120, 200, 180, 120, 230, 20, 100],
        },
        {
          type: 'bar',
          label: 'Computer Labs',
          backgroundColor: '#f6cabe',
          data: [300, 200, 230, 30, 300, 140, 300],
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1.9,
      plugins: {
        legend: {
          position: 'none',
          labels: {
            color: '#cbc5d4',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            display: true,
          },
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: '#cbc5d4',
          },
          grid: {
            drawBorder: false,
            color: '#f9eae1',
          },
        },
      },
    };
  }
}
