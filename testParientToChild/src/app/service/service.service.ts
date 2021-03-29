import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ChildComponent } from '../components/child/child.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

data!:string;
myMethod$: Observable<any>;
private myMethodSubject = new Subject<any>();


  constructor() { 
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

setDataA(data:string){
this.data = data;

}

getDataA(): Observable<any>{
  const myData = new Observable(obs => {
   
    obs.next(this.data);
  })
  return myData;
}
 
myMethod(data) {
  console.log(data); // I have data! Let's return it so subscribers can use it!
  // we can do stuff with data if we want
  this.myMethodSubject.next(data);
}
}






