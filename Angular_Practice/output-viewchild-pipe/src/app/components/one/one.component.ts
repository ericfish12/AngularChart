import { Component, OnInit,ViewChild } from '@angular/core';
import { TwoComponent } from '../two/two.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  title = 'ParentChildCommunication';
  message!: string;

  @ViewChild(TwoComponent)
  cnt!: TwoComponent;

  ngOnInit() {
    this.message = "Max Click Reached, click reset to continue...";
  }

  // ngAfterViewInit() {
  //   this.cnt.interval = 20;
  // }

  p_reset(c: TwoComponent) {
    c.reset();
  }

  maxedOut(flag: boolean) {
    if (flag)
      this.message = "Max Click Reached, click reset to continue...";
    else
      this.message = "";
  }

}
