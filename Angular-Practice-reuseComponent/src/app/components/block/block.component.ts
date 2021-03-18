import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() color!:string

  constructor() { }

  ngOnInit(): void {
console.log(this.color)
    // document.getElementsByTagName('button')[0].style.backgroundColor = this.color
  }
onclick(co:string){

let obj = {

  red:0,
  black:1,
  green:2,
  blue:3
}




document.getElementsByTagName('h1')[0].style.color = this.color

document.getElementsByTagName('div')[obj[co]+1].style.boxShadow=`10px 5px 5px ${co}`;

// nodes[0].style.boxShadow="10px 5px 5px red";




}
}
