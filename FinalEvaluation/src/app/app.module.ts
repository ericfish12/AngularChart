import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { CreateItemComponent } from './components/create-item/create-item.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateItemComponent } from './components/update-item/update-item.component';

@NgModule({
  declarations: [AppComponent, CreateItemComponent, UpdateItemComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreateItemComponent],
})
export class AppModule {}
