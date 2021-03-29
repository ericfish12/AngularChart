import { ServiceService } from './../../service/service.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {
  
color!:string;
  constructor(private retrive: ServiceService) { 

    this.retrive.myMethod$.subscribe((data) => {
      this.color = data; // And he have data here too!
  }
);




  }

  ngOnInit(): void {

   

  }

ngOnChange(){



}





  BgetsData(){

    this.retrive.getDataA().subscribe((r) => {
      this.color = r;
     console.log(r)
    });
   

  }



  }


