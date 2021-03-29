import { Post } from './../Model/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

url:string = 'http://localhost:3000/posts'


  constructor(private http: HttpClient) { }


    getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.url);
    }
 



  createPost(post: Post){
    return this.http.post(this.url, post);
  }

  updatePost(post:Post, id:number){
    return this.http.put(`${this.url}/${id}`, post);
  }


  deletePost(id: number):Observable<Post>{
    return this.http.delete<Post>(`${this.url}/${id}`)

  }



}
