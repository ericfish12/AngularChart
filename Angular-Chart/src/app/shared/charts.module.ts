import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';
import { FourChartComponent } from '../components/four-chart/four-chart.component';
import { OneChartComponent } from '../components/one-chart/one-chart.component';
import { SixChartComponent } from '../components/six-chart/six-chart.component';
import { ThreeChartComponent } from '../components/three-chart/three-chart.component';
import { TwoChartComponent } from '../components/two-chart/two-chart.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    BarChartComponent,
    OneChartComponent,
    TwoChartComponent,
    ThreeChartComponent,
    FourChartComponent,
    SixChartComponent,
  ],
  imports:[
      BrowserModule,
      CommonModule,
      FormsModule,
      ChartModule
  ],

  exports:[
    BarChartComponent,
    OneChartComponent,
    TwoChartComponent,
    ThreeChartComponent,
    FourChartComponent,
    SixChartComponent,

  ]







})
export class ChartsModule {}
