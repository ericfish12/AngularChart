import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Chart';
  inline:any;
  value:any;
  data: any;
  display:boolean = false;
  options: any;


  overlays: any[];
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
      
    //   this.options = {
    //       title: {
    //           display: true,
    //           text: 'My Title',
    //           fontSize: 16
    //       },
    //       legend: {
    //           position: 'bottom'
    //       }
    //   };

    




  }


  ngOnInit(): void {

    this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };





}



}
