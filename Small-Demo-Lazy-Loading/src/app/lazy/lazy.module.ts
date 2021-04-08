import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { LazyRoutingModule } from './lazy-routing.module';



@NgModule({
  declarations: [
    LazyComponentComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
