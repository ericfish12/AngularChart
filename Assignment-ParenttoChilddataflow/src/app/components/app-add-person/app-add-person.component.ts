import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-add-person',
  templateUrl: './app-add-person.component.html',
  styleUrls: ['./app-add-person.component.scss']
})
export class AppAddPersonComponent implements OnInit {



  person:string='';
  people: string[]=[];
  currentItem = 'Television';


  constructor() { }

  ngOnInit(): void {
  }


  addPerson(): void{
    this.people.push(this.person)
   this.person = ''
  }

}
