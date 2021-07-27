import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import {DataService} from '../services/data.service'
 
import { Router } from '@angular/router';
import { CameraPhoto } from '@capacitor/camera';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  savePicture(cameraPhoto: CameraPhoto) { }

  constructor(public photoService: PhotoService, private router: Router, private dataService: DataService) { }

  addPhotoToGallery() {
  this.photoService.addNewToGallery();
  } 

  //to navagate to home page and save project
  moveToHome() {
    this.dataService.addingPhotos.push(this.photoService.photos) 
    console.log('checking that data service is populated',this.dataService.addingPhotos)
    this.router.navigateByUrl('/tabs/tab1');

  }
}

