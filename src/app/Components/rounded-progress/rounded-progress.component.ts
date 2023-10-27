import { Component } from '@angular/core';

@Component({
  selector: 'app-rounded-progress',
  templateUrl: './rounded-progress.component.html',
  styleUrls: ['./rounded-progress.component.css'],
})
export class RoundedProgressComponent {
  data: any;
  options: any;

  ngOnInit() {
    this.data = {
      labels: ['Course Completed', 'Course remaining'],

      datasets: [
        {
          data: [70, 30],
          backgroundColor: ['#7c7bf6', '#f6f5fd'],
          hoverBackgroundColor: ['#7c7bf6', '#f6f5fd'],
          borderRadius: 10,
        },
        statusbar,
      ],
    };
    this.options = {
      cutout: '50%',

      aspectRatio: 1.4,
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
