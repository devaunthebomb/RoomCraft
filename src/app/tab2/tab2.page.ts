import { Component, OnInit } from '@angular/core';
// import { PhotoService } from '../services/photo.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  constructor(private camera: Camera, private screenorientation: ScreenOrientation) { 
  }
 
  ngOnInit() {
    console.log(this.screenorientation.type);
    this.screenorientation.lock(this.screenorientation.ORIENTATIONS.LANDSCAPE)
  }
  // options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  
  // addPhotoToGallery() {
  //   this.camera.getPicture(this.options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64 (DATA_URL):
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //    }, (err) => {
  //     // Handle error
  //    });
  // }
  
}




 


