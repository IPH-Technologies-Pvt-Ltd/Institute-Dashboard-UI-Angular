import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-chart',
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.css'],
})
export class HorizontalChartComponent implements OnInit {
  data: any;
  options: any;

  ngOnInit() {
    this.data = {
      labels: ['SAP', 'TCS', 'Wipro', 'IPH'],
      datasets: [
        {
          type: 'bar',
          label: 'CS',
          backgroundColor: '#9b9af7',
          data: [50, 25, 12, 48, 90, 76, 42],
          borderRadius: 20,
        },
        {
          type: 'bar',
          label: 'ECE',
          backgroundColor: '#656ded',
          data: [21, 84, 24, 75, 37, 65, 34],
          borderRadius: 20,
        },
        {
          type: 'bar',
          label: 'EE',
          backgroundColor: '#b8b6f8',
          data: [41, 52, 24, 74, 23, 21, 32],
          borderRadius: 20,
        },
        {
          type: 'bar',
          label: 'AI',
          backgroundColor: '#5155c4',
          data: [39, 12, 34, 24, 63, 52, 42],
          borderRadius: 20,
        },
      ],
    };
    this.options = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 1.5,
      plugins: {
        display: false,
        legend: {
          position: 'bottom',
          labels: {
            color: 'black',
          },
        },
      },

      scales: {
        x: {
          stacked: true,
          ticks: {
            display: false,
            font: {},
          },
          grid: {
            drawBorder: false,
            display: false,
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: 'gray',
          },
          grid: {
            display: false,
          },
        },
      },
    };
  }
}
