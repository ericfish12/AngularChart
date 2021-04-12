import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-chart',
  templateUrl: './two-chart.component.html',
  styleUrls: ['./two-chart.component.scss']
})
export class TwoChartComponent implements OnInit {
  data: any;

    constructor() {
        this.data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
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
    }

  ngOnInit(): void {
  }

}
