import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ButtonModule}from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import { OneChartComponent } from './components/one-chart/one-chart.component';
import { TwoChartComponent } from './components/two-chart/two-chart.component';
import { ThreeChartComponent } from './components/three-chart/three-chart.component';
import { FourChartComponent } from './components/four-chart/four-chart.component';

import { SixChartComponent } from './components/six-chart/six-chart.component';
 
 

// import { FusionChartsModule } from "angular-fusioncharts";

// // Import FusionCharts library and chart modules
// import * as FusionCharts from "fusioncharts";
// import * as charts from "fusioncharts/fusioncharts.charts";
// import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    OneChartComponent,
    TwoChartComponent,
    ThreeChartComponent,
    FourChartComponent,

    SixChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ChartModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
