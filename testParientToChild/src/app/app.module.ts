import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ChildBComponent } from './components/child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
