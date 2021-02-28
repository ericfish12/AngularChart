import { Component,OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-app-person-list',
  templateUrl: './app-person-list.component.html',
  styleUrls: ['./app-person-list.component.scss']
})
export class AppPersonListComponent implements OnInit {

  @Input() people1:string[];

  ngOnInit(): void {
  }

        
      
// interface OnChanges {
//   ngOnChanges(changes: SimpleChanges): void
// }

    

// ngOnChanges(changes: SimpleChanges) {
//   // changes.prop contains the old and the new value...
//   console.log('changes, ngOnChanges', changes)
//   // this.people1 = this.people1
//   for (const propName in changes){
//     // this is a ref to the simple change object
//     // need to take curr and prev val of props and add to change log
//     // iterates thru item, people1, person 1
//     // val of each prop is an obj
//     // eg 
//     /**
//      * {
//      * item: {
//      *          prev: undefined,
//      *          cv: Television,
//      *          firstChange: true
//      *            }
//      * person1: {
//      *          prev: undefined
//      *          cv: []
//      *  }
//      * people1:
//      * 
//      * }
//      */
//     const change = changes[propName]
//     // console.log('prev value', change.previousValue)
//     // console.log('current value', change.currentValue)
//     // const new: string = change[to]
//     this.person1 = change.currentValue
//     console.log('person 1', this.person1)
//     this.people1.push(this.person1) 
//     console.log('checking ppl arr', this.people1)
//   }
// }

//   onClick(){
//     this.people1 = this.people1 
//     console.log(this.people1)
//   }
}
