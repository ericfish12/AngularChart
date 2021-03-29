import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.scss']
})
export class AllPhotosComponent implements OnInit {
  allPhotos!:any[]
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getAllPhotos().subscribe(
      data=>{this.allPhotos = data.slice(0,200)
      console.log(this.allPhotos)}
    )
  }

}

