import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  constructor(private retrive: ServiceService) { }

  ngOnInit(): void {
  }


  onClick(){

   
    this.retrive.myMethod('Yellow');
    this.retrive.setDataA('red')
  }




}
