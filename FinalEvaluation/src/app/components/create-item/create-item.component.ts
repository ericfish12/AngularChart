import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/Model/post';
import { DataService } from 'src/app/service/data.service';
import { PostsStateService } from 'src/app/service/posts-state.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {
  form: FormGroup;
  description: string;

  constructor(
    private retrive: PostsStateService,
    private dservice: DataService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateItemComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data.description;
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  save() {
    console.log(this.form.value);

    let post = new Post();
    post.title = this.form.value.title;
    post.body = this.form.value.body;

    this.dservice.createPost(post).subscribe((post) => {
      this.dservice.getPosts().subscribe((posts) => {
        this.retrive.updateState(posts);
        this.dialogRef.close();
      });
    });
  }

  close() {
    this.dialogRef.close();
  }
}
