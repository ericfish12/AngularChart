import { DataService } from './../../Service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/photo';

@Component({
  selector: 'app-one-photo',
  templateUrl: './one-photo.component.html',
  styleUrls: ['./one-photo.component.scss']
})
export class OnePhotoComponent implements OnInit {
id:number=1
photo!:Photo
  constructor(private dataService: DataService,public route: ActivatedRoute) { }

  ngOnInit(): void {

   
this.route.queryParams.subscribe((id)=>{
   console.log(+id.oop+1)
  this.id = +id.oop+1
})



    this.dataService.getOnePhoto(this.id).subscribe((photo)=>{
      console.log(photo)
      
      this.photo = photo})
  }

}
