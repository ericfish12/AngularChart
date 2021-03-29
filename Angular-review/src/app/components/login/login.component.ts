import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: any[] = [];
  rForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.rForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
      ]),

      password: new FormControl('', [
        Validators.required,
        
      ]),
    
    });
  }

  

  onSubmit() {
    // console.log(this.rForm.value);
    console.log(this.rForm.value)
  }

}
