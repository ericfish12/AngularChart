import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {



  constructor(private http: HttpClient) { }

  getPosts(ARTIST_NAME:string): Observable<any> {
    return this.http.get<any>( `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`);
  }



}
