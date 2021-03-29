import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AllPhotosComponent}from'../app/components/all-photos/all-photos.component'
import { LoginComponent } from './components/login/login.component';
import { OnePhotoComponent } from './components/one-photo/one-photo.component';





const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "allPhotos", component: AllPhotosComponent},
  { path: "onePhoto", component: OnePhotoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
