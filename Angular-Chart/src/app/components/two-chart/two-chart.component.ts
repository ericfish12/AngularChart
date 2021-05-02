import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-chart',
  templateUrl: './two-chart.component.html',
  styleUrls: ['./two-chart.component.scss']
})
export class TwoChartComponent implements OnInit {
  inputVal:number=-30;
  data: any;
  changedData:any;

    constructor() {
      this.data = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [this.inputVal||30, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]    
        };
// setInterval(() => {
  this.inputVal =Number( this.inputVal)+10
  this.data = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [this.inputVal, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]    
    };

console.log(this.inputVal)
          // }, 3000);


    }


onChange(){
  this.changedData = {
    labels: ['X','Y','Z'],
    datasets: [
        {
            data: [200, 200, 50],
            backgroundColor: [
                "#50f442",
                "#f441c4",
                "#4195f4"
            ],
            hoverBackgroundColor: [
                "#50f442",
                "#f441c4",
                "#4195f4"
            ]
         }]
}
this.data = Object.assign({}, this.changedData);
// console.log(this.inputVal)

}

  ngOnInit(): void {
  }

}
