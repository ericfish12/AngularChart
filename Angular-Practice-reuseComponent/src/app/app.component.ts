import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Practice-reuseComponent';
headColor :string= 'black'
state:string=''

color:string[]=['red','black','green','blue']

seHeadColor(e){
this.headColor = e
this.state = e
}

}
