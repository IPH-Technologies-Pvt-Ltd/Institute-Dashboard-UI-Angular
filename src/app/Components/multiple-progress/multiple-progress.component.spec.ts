import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleProgressComponent } from './multiple-progress.component';

describe('MultipleProgressComponent', () => {
  let component: MultipleProgressComponent;
  let fixture: ComponentFixture<MultipleProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleProgressComponent]
    });
    fixture = TestBed.createComponent(MultipleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
