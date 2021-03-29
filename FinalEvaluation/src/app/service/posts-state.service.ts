import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../Model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsStateService {

 
data!:Post[];
updateState$: Observable<any>;
private myMethodSubject = new Subject<any>();


  constructor() { 
    this.updateState$ = this.myMethodSubject.asObservable();
  }

  updateState(data:Post[]) {
  
  this.myMethodSubject.next(data);
}
}
