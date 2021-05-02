import { Component, OnInit } from '@angular/core';
 
 
import {ChartModule} from 'primeng/chart';


@Component({
  selector: 'app-one-chart',
  templateUrl: './one-chart.component.html',
  styleUrls: ['./one-chart.component.scss']
})
export class OneChartComponent { 
  
  data: any;
    
  options: any;
  
  constructor() {

  
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [6675, 5964, 8740, 8741, 5666, 5665, 4660]
              },
              {
                  label: 'Second Dataset',
                  data: [2668, 0, 4660, 1669, 8666, 2667, 9044]
              }
          ]
      }
      
      this.options = {
          title: {
              display: true,
              text: 'My Title',
              fontSize: 16
          },
          legend: {
              position: 'bottom'
          }
      };
  }
}
