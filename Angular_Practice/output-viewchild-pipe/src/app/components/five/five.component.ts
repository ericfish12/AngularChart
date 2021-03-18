import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss']
})
export class FiveComponent implements OnInit {
  forms!: FormGroup;
  userList: User[] = [];

addUser(){
this.userList.push(this.forms.value);
}

  constructor() { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      contact: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }


}


interface User{
  name:string;
  contact:string;
  email:string;
}