import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAddPersonComponent } from './components/app-add-person/app-add-person.component';
import { AppPersonListComponent } from './components/app-person-list/app-person-list.component';

import{FormsModule} from '@angular/forms';
import { ChildComponent } from './component/child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    AppAddPersonComponent,
    AppPersonListComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
