import { Component, OnInit ,Input, Output} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() color!:string
selected!:string
  @Output() boxStyle
// boxStyle!: string;
  constructor() { }

  ngOnInit(): void {
console.log(this.color)
    // document.getElementsByTagName('button')[0].style.backgroundColor = this.color
  }
onclick(co:string){

this.selected = this.color;


document.getElementsByTagName('h1')[0].style.color = this.color;

// this

// document.getElementById("red").style.boxShadow='unset';
// document.getElementById("black").style.boxShadow='unset';
// document.getElementById("blue").style.boxShadow='unset';
// document.getElementById("green").style.boxShadow='unset';

document.querySelectorAll<HTMLElement>('.block').forEach((e)=>{e.style.boxShadow='unset';})
let what = document.getElementsByClassName('block')[0]
console.log(what)






document.getElementById(this.color).style.boxShadow=`10px 5px 5px ${co}`;

// nodes[0].style.boxShadow="10px 5px 5px red";




}
}
