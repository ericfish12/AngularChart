import { Component } from '@angular/core';
import { HttpServiceService } from './service/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment-three-hours';

inputVal!:string
array:any[]=[];
  constructor(private dservice: HttpServiceService) {

  }

  // ngOnInit() {
  //   this.dservice.getPosts(this.inputVal).subscribe(r => this.array = r);
  // }


onChange(){
  this.dservice.getPosts(this.inputVal).subscribe(r => this.array = r.results);
console.log(this.array)

}


 












}
