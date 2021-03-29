import { Component, OnInit ,Input, Output, EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
@Input() selected:string='';
  @Input() color!:string
  @Output() currentColor: EventEmitter<string> = new EventEmitter<string>();
 state!:string
// boxStyle!: string;
  constructor() { }

  ngOnInit(): void {
// console.log(this.color)
    // document.getElementsByTagName('button')[0].style.backgroundColor = this.color
  }


  setStyle(e){
    console.log('sssssss')
  }


ngDoCheck(){
  this.state =""              //clear all four components boxShadow
  if(this.selected == this.color)         //select the current clicked component 
  this.state ="10px 5px 5px "+ this.selected       // set this component's boxShadow
}


  // ngAfterViewChecked(){
  //   console.log(2,this.selected)
  // }


ngAfterContentChecked(){
//  //state is for boxShadow; 
//    this.state =""              //clear all four components boxShadow
// if(this.selected == this.color)         //select the current clicked component 
// this.state ="10px 5px 5px "+ this.selected       // set this component's boxShadow
 }

//  ngOnChanges(changes: SimpleChanges) {
//    console.log(changes)
//    this.state =""              //clear all four components boxShadow
// if(this.selected == this.color)         //select the current clicked component 
// this.state ="10px 5px 5px "+ this.selected       // set this component's boxShadow




  
// }

async onclick(co:string){

await this.currentColor.emit(co);
// this.ngDoCheck()
//    this.state ="10px 5px 5px "+ this.selected
//  this.ngOnInit()

  console.log(this.selected)


// document.getElementsByTagName('h1')[0].style.color = this.color;

// this

// document.getElementById("red").style.boxShadow='unset';
// document.getElementById("black").style.boxShadow='unset';
// document.getElementById("blue").style.boxShadow='unset';
// document.getElementById("green").style.boxShadow='unset';

// document.querySelectorAll<HTMLElement>('.block').forEach((e)=>{e.style.boxShadow='unset';})
// let what = document.getElementsByClassName('block')[0]
// console.log(what)






// document.getElementById(this.color).style.boxShadow=`10px 5px 5px ${co}`;

// nodes[0].style.boxShadow="10px 5px 5px red";




}
}
