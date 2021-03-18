import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})





export class FourComponent implements OnInit {




  model = new User();
  empList: User[] = [];

  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Singing',
    'Dancing'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.empList.push(form.value);
  }


}
class User{
  public name!: string;
  public email!: string;
  public password!: string;
  public hobbies?:string;
  }