import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-progress',
  templateUrl: './multiple-progress.component.html',
  styleUrls: ['./multiple-progress.component.css'],
})
export class MultipleProgressComponent implements OnInit {
  unit1Width: string = '55%';
  unit2Width: string = '17%';
  unit3Width: string = '28%';

  constructor() {}

  // get unit1Color(): string {
  //   return 'bg-success';
  // }

  // get unit2Color(): string {
  //   return 'bg-warning';
  // }

  // get unit3Color(): string {
  //   return 'bg-danger';
  // }

  ngOnInit() {}
}
