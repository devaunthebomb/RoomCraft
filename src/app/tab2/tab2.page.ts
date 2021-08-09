import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import {DataService} from '../services/data.service'
import { AlertController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';


import { Router } from '@angular/router';
import { CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  savePicture(cameraPhoto: CameraPhoto) { }
  public htmlToAdd = ''
  public htmlToAdd2 = ''
  public htmlToAdd3 = ''
  public htmlToAdd4 = ''
  constructor(public photoService: PhotoService, private router: Router, private dataService: DataService, public alertCtrl: AlertController) { }

  addPhotoToGallery() {
  this.photoService.addNewToGallery();
  } 

  //to navagate to home page and save project
  moveToHome() {
    // this.dataService.addingPhotos.push(this.photoService.photos) 
    // console.log('checking that data service is populated',this.dataService.addingPhotos)
    this.router.navigateByUrl('/tabs/tab1');

  }
  async showConfirm() { 
    const confirm = await this.alertCtrl.create({ 
    header: 'Confirmation', 
    message: 'Are you sure you want to head to the home page?', 
    buttons: [
    { 
    text: 'Yes',
    role: 'Confirm', 
    handler: () => {  
      this.moveToHome()
    } 
    }, 
    { 
    text: 'No', 
    role: 'Cancel',
    handler: () => { 
       
    } 
    } 
    ] 
    }); 
    await confirm.present(); 
    } 

    addChair(){
      this.htmlToAdd = '<model-viewer src="../../assets/3d/chair-roomcraft/root.gltf" alt="chair"  camera-controls> </model-viewer>'
    }

    addLamp(){
      this.htmlToAdd2 = '<model-viewer src="../../assets/3d/lamp-roomcraft/root.gltf" alt="chair" camera-controls> </model-viewer>'
    }

    addCouch(){
      this.htmlToAdd3 = '<model-viewer src="../../assets/3d/sofa-roomcraft/root.gltf" alt="chair" camera-controls> </model-viewer>'
    }

    addTable(){
      this.htmlToAdd4 = '<model-viewer src="../../assets/3d/table-roomcraft/root.gltf" alt="chair" camera-controls> </model-viewer>'
    }
    
    deleteChair(){
      this.htmlToAdd = ''
    }

    deleteLamp(){
      this.htmlToAdd2 = ''
    }

    deleteCouch(){
      this.htmlToAdd3 = ''
    }

    deleteTable(){
      this.htmlToAdd4 = ''
    }

}

