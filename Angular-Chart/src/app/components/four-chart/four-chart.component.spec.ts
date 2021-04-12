import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourChartComponent } from './four-chart.component';

describe('FourChartComponent', () => {
  let component: FourChartComponent;
  let fixture: ComponentFixture<FourChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
