import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

export interface MyPhoto{
  filepath: string;
  webViewPath: string;
}

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public photos: MyPhoto[] = [] 

  constructor() { }
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      filepath: 'string coming soon',
      webViewPath: capturedPhoto.webPath
    })


  }
}




