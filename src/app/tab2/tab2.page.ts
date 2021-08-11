import { Component, ViewChild, ElementRef } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import {DataService} from '../services/data.service'
import { AlertController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { Capacitor } from '@capacitor/core'
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';


import { Router } from '@angular/router';
import { CameraPhoto, CameraResultType, CameraSource, Camera } from '@capacitor/camera';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  @ViewChild('filePicker',{static: false}) filePickerRef: ElementRef<HTMLInputElement>;
  public photo: SafeResourceUrl;
  
  // savePicture(cameraPhoto: CameraPhoto) { }
  public htmlToAdd = ''
  public htmlToAdd2 = ''
  public htmlToAdd3 = ''
  public htmlToAdd4 = ''

  listOfImages = [] 
  constructor(public photoService: PhotoService, private router: Router, private dataService: DataService, public alertCtrl: AlertController, public domsanitizer: DomSanitizer) { }

  // addPhotoToGallery() {
  // this.photoService.addNewToGallery();
  // } 

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
    
    // start of adding and removing items
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
    //end of adding and removing items

    async getPicture() {
      if(!Capacitor.isPluginAvailable('Camera')) {
        this.filePickerRef.nativeElement.click();
        return;
      } 
      const image = await Camera.getPhoto({
        quality: 100,
        width: 400,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt
      });
      this.photo = this.domsanitizer.bypassSecurityTrustResourceUrl(image && image.dataUrl)
    }

    onFileChoose(event: Event) {
      const file = (event.target as HTMLInputElement).files[0]
      const pattern = /image-*/;
      const reader = new FileReader();

      if(!file.type.match(pattern)){
        console.log('File not supported')
        return;
      }
      reader.onload = ()=>{
        this.photo = reader.result.toString();
      }
      reader.readAsDataURL(file);
    }



}

