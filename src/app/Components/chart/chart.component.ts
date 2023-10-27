import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  data: any;
  data1: any;

  options: any;
  options1: any;

  ngOnInit() {
    this.data = {
      labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      datasets: [
        {
          label: 'Books Issued by faculty',
          data: [10, 14, 10, 8, 14, 20, 11],
          fill: true,
          tension: 0.4,
          borderColor: 'transparent',
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
            gradient.addColorStop(0, 'rgba(111,107,244, 4)'); // Starting color with alpha 1
            gradient.addColorStop(1, 'rgba(111,107,244, 0.2)'); // Ending color with alpha 0.3
            return gradient;
          },

          pointRadius: 0,
        },

        {
          label: 'Books Return by faculty',
          data: [18, 23, 13, 18, 21, 31, 19],
          fill: true,
          borderColor: 'transparent',
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
            gradient.addColorStop(0, 'rgba(183,183,247, 10)'); // Starting color with alpha 1
            gradient.addColorStop(1, 'rgba(183,183,247, 0)'); // Ending color with alpha 0.3
            return gradient;
          },

          pointRadius: 0,
        },
      ],
    };
    this.data1 = {
      labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      datasets: [
        {
          label: 'Books Issued by students',
          data: [10, 14, 10, 8, 14, 20, 11],
          fill: true,
          tension: 0.4,
          borderColor: 'transparent',
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
            gradient.addColorStop(0, 'rgba(246,141,93, 4)');
            gradient.addColorStop(1, 'rgba(246,141,93, 0.4)');
            return gradient;
          },
          pointRadius: 0,
        },

        {
          label: 'Books Return by faculty',
          data: [18, 23, 13, 18, 21, 31, 19],
          fill: true,
          borderColor: 'transparent',
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
            gradient.addColorStop(0, 'rgba(245, 149, 99, 4)');
            gradient.addColorStop(1, 'rgba(246, 141, 93, 0.4)');
            return gradient;
          },
          pointRadius: 0,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1.9,
      plugins: {
        legend: {
          position: 'none',
        },
      },
      scales: {
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
        x: {
          ticks: {
            color: 'gray',
          },
          grid: {
            color: 'gray',
          },
        },
      },
    };
    this.options1 = {
      maintainAspectRatio: false,
      aspectRatio: 1.9,
      plugins: {
        legend: {
          position: 'none',
        },
      },
      scales: {
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
        x: {
          ticks: {
            color: 'gray',
          },
          grid: {
            color: 'gray',
          },
        },
      },
    };
  }
}
