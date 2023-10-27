import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Boys',
          data: [10, 14, 10, 8, 21, 18, 31, 11, 0],
          fill: false,
          tension: 0.4,
          borderColor: '#fca789',
          pointRadius: [0, 7, 0, 0, 7, 0, 0, 0, 0],
          pointBorderWidth: [0, 2, 0, 0, 2, 0, 0, 0, 0],
          pointBorderColor: [0, '#fca789', 0, 0, '#fca789', 0, 0, 0, 0],
          pointBackgroundColor: [0, '#ffffff', 0, 0, '#ffffff', 0, 0, 0, 0],
        },

        {
          label: 'Girls',
          data: [18, 23, 13, 8, 12, 9, 3, 10, 23, 21, 0],
          fill: true,
          borderColor: '#5155c3',
          tension: 0.4,
          backgroundColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) {
              return null;
            }
            const gradient = ctx.createLinearGradient(
              chartArea.left,
              chartArea.top,
              chartArea.left,
              chartArea.bottom
            );
            gradient.addColorStop(0, 'rgba(97,96,237, 1)'); // Starting color with alpha 1
            gradient.addColorStop(1, 'rgba(97,96,237, 0)'); // Ending color with alpha 0.3
            return gradient;
          },

          pointRadius: [0, 7, 0, 0, 0, 7, 0, 0, 0],
          pointBorderWidth: [0, 2, 0, 0, 0, 2, 0, 0, 0],
          pointBorderColor: [0, '#5258f0', 0, 0, '#5258f0', 0, 0, 0, 0],
          pointBackgroundColor: [0, '#ffffff', 0, 0, '#ffffff', 0, 0, 0, 0],
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1.1,
      plugins: {
        legend: {
          position: 'bottom',

          labels: {
            color: 'gray',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: '#d7d4df',
          },
          grid: {
            color: '#edecfc',
          },
        },
      },
    };
  }
}
