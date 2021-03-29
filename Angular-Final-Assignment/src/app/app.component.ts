import { Component } from '@angular/core';
import { HttpServiceService } from './service/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  value!:any
  title = 'Angular-Final-Assignment';
flag :boolean = false;
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
      this.inputVal = initVal; //render the input value in input tag
      this.dservice.getPosts(initVal).subscribe((r) => {
        this.albums = r.results;
        this.array = r.results;
        // for (let arr of this.array)
        // {arr.isLike = this.isLike}
        // console.log(this.array[0])
        this.resultsCount = r.resultCount;
       this.flag = true
      });
    }
  }

  onSelect(event: any, value: any) {
    // if (value !== 'default') this.array = this.albums.slice(0, value);
    // else this.array = this.albums;

    this.value = value
  }

  onKey(event: any) {
    if (event.key == 'Enter') {
      this.lastInputVal = this.inputVal;
      this.dservice.getPosts(this.inputVal).subscribe((r) => {
        this.array = r.results;
        // for (let arr of this.array)
        // {arr.isLike = this.isLike}
        // console.log(this.array[0])

        this.albums = r.results;
        this.resultsCount = r.resultCount;

        this.flag = true
        // document.getElementsByTagName('select')[0].selectedIndex = 0; //set default option as default
      });
      localStorage.setItem('lastInput', this.inputVal);
    }
  }

  onLike(e: any) {
    if (e.target.className == 'active') {
      e.target.classList.remove('active');
    } else if (e.target.className == '') {
      e.target.className = 'active';
      (e.target.nextSibling || e.target.previousSibling).classList.remove(
        'active'
      );
    }
  }
}
