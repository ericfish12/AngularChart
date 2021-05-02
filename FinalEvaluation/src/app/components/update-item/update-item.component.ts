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
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss'],
})
export class UpdateItemComponent implements OnInit {
  form: FormGroup;
  description: any;

  constructor(
    private retrive: PostsStateService,
    private dservice: DataService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.description = data;
  }

  ngOnInit() {
    console.log(this.description);
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

    this.dservice.updatePost(post, this.description.id).subscribe((post) => {
      this.dservice.getPosts().subscribe((posts) => {
        console.log("看看",post)
        this.retrive.updateState(posts);
        this.dialogRef.close();
      });
    });
  }

  close() {
    this.dialogRef.close();
  }
}
