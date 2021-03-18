import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

state!: Array<string>;
  personList!: Array<string>;
  selectedPerson!: string;
  by!: string;

  constructor() { }

  ngOnInit() {
    this.state= ["Manish", "Ramakant", "Varun", "Rohit", "Subodh"];
    this.personList = ["Manish", "Ramakant", "Varun", "Rohit", "Subodh"];
    this.by='';
  }

  // ngAfterViewChecked() {
  //   console.log('2222')
  //   this.personList = this.state.filter((e)=>{return e.startsWith(this.by)})
  // }


  doClick(e: Event, sPerson: string) {
    e.preventDefault();
    this.selectedPerson = sPerson;
  }
  hi(){
   
    this.personList = this.state.filter((e)=>{return e.startsWith(this.by)})
  }

}
