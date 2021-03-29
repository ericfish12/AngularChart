import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PipePipe } from './pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipePipe,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
