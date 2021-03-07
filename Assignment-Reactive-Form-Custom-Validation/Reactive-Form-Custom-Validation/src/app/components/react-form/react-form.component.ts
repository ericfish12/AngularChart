import { Component, OnInit, OnChanges } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormsModule,
} from '@angular/forms';
import { equal } from 'src/app/customsValidator/confirmPassword.validator';
import { User } from 'src/app/Model/User';
@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss'],
})
export class ReactFormComponent implements OnInit {
  users: User[] = [];
  rForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.rForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
      ]),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirm: new FormControl('', [equal]),
    });
  }

  onChange() {
    console.log(this.rForm.get('confirm'));
    equal(this.rForm.get('confirm'));
  }

  onSubmit() {
    console.log(this.rForm.value);
    this.users.push(this.rForm.value);
  }
}
