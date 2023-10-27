import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedProgressComponent } from './rounded-progress.component';

describe('RoundedProgressComponent', () => {
  let component: RoundedProgressComponent;
  let fixture: ComponentFixture<RoundedProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundedProgressComponent]
    });
    fixture = TestBed.createComponent(RoundedProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
