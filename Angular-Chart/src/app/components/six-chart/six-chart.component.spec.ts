import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixChartComponent } from './six-chart.component';

describe('SixChartComponent', () => {
  let component: SixChartComponent;
  let fixture: ComponentFixture<SixChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
