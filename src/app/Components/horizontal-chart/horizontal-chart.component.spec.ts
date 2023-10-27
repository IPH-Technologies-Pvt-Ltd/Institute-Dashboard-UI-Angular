import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalChartComponent } from './horizontal-chart.component';

describe('HorizontalChartComponent', () => {
  let component: HorizontalChartComponent;
  let fixture: ComponentFixture<HorizontalChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalChartComponent]
    });
    fixture = TestBed.createComponent(HorizontalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
