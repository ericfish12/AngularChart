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
                  data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                  label: 'Second Dataset',
                  data: [28, 48, 40, 19, 86, 27, 90]
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
