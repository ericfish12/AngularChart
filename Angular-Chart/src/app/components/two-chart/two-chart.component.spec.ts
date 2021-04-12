import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoChartComponent } from './two-chart.component';

describe('TwoChartComponent', () => {
  let component: TwoChartComponent;
  let fixture: ComponentFixture<TwoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
