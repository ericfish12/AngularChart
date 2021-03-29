import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { Post } from './Model/post';
import { DataService } from './service/data.service';
import { PostsStateService } from './service/posts-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FinalEvaluation';
  posts!: Post[];
  popup = false;
  constructor(
    private retrive: PostsStateService,
    private dservice: DataService,
    private dialog: MatDialog
  ) {
    this.retrive.updateState$.subscribe((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit() {
    this.dservice.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onDelete(id: number) {
    this.dservice.deletePost(id).subscribe((post) => {
      console.log(post);

      this.dservice.getPosts().subscribe((posts) => {
        this.posts = posts;
      });
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners',
    };

 
    const dialogRef = this.dialog.open(CreateItemComponent, dialogConfig);
 
  }

  openDialog2(post: Post) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = post;

 
    const dialogRef = this.dialog.open(UpdateItemComponent, dialogConfig);

 
  }
}
