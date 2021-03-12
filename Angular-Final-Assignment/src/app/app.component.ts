import { Component } from '@angular/core';
import { HttpServiceService } from './service/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-Final-Assignment';

  resultsCount!: number; //numbers of albums
  inputVal!: string; //search input value double binding
  lastInputVal!: string; //static input value when press Enter
  array: any[] = []; //  albums to be rendered
  albums: any[] = []; // All albums from server
  constructor(private dservice: HttpServiceService) {}
  ngOnInit() {
    //get search keyword from localStorage if any then assign it to static input value holder
    let initVal = localStorage.getItem('lastInput') || '';
    this.lastInputVal = initVal;
    if (initVal !== '') {
      this.inputVal = initVal;    //render the input value in input tag 
      this.dservice.getPosts(initVal).subscribe((r) => {
        this.albums = r.results;
        this.array = r.results;
        this.resultsCount = r.resultCount;
        document.getElementById('later-display').style.display = 'unset';
        document.getElementById('first-display').style.display = 'none';
      });
    }
  }

  onSelect(event: any, value: any) {
    if (value !== 'default') this.array = this.albums.slice(0, value);
    else this.array = this.albums;
  }

  onKey(event: any) {
    if (event.key == 'Enter') {
      this.lastInputVal = this.inputVal;
      this.dservice.getPosts(this.inputVal).subscribe((r) => {
        this.array = r.results;
        this.albums = r.results;
        this.resultsCount = r.resultCount;

        document.getElementById('later-display').style.display = 'unset';
        document.getElementById('first-display').style.display = 'none';
        document.getElementsByTagName('select')[0].selectedIndex = 0;  //set default option as default
      });
      localStorage.setItem('lastInput', this.inputVal);
    }
  }
}
