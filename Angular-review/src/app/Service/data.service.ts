import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

   }


   getAllPhotos():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
   }


   getOnePhoto(id:number):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
   }

}
