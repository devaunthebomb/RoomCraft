import { Component, ViewChild, ElementRef,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Project } from '../services/project'
import { UploadService } from '../services/upload.service'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms'
import { Platform } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



class ImageSnippet{
  pending: boolean = false;
  status: string = "init"; 

  constructor(public src: string, public file: File){}
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild("filePicker", {static: false}) filePickerRef: ElementRef<HTMLInputElement>; 
  public file: File;
  public selectedImage: ImageSnippet;
  public form: FormGroup;
  projectsArr : Project[] = [];
  public projectsList = [];
  public isDesktop: boolean;
  public photo: SafeResourceUrl;
  // subcription: Subscription;
  // test: any = []
  
  

  newProject(){
    this.router.navigateByUrl("/tabs/tab2")
  }

  display: any;
  constructor(private dataService : DataService, private uploadService: UploadService, private router: Router, public formbuilder: FormBuilder, private platform: Platform) {
    // console.log(this.uploadService.listOfProjectsObs)
    // this.subcription = this.uploadService.listOfProjectsObs.subscribe((data)=>{
    //   this.projectsList.push(data);
    //   console.log(data);
    // })
    this.load();
  }
   ngOnInit() {
    // //  this.uploadService.getAllProjects().subscribe((data: any)=>{
    // //    console.log(data);
    // //    this.display = data;
    // //    console.log(this.display.documents)
    //  });
      this.initForm();
    }

   initForm(){
     this.form = this.formbuilder.group({
       name: ['', Validators.required],
       avatar: ['', Validators.required],
       cloudinary_id: ['', Validators.required]
     })
   }


    load(){
      this.uploadService.listOfProjectsObs.subscribe((data: any)=>{
        this.projectsList = data.documents;
      
      });

    }

    displayObjects(){
      console.log(this.projectsList);
    }

    onChooseFile(event: Event){
      const file = (event.target as HTMLInputElement).files[0];
      const pattern = /image-*/;
      const reader = new FileReader();


    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    // reader.onload = () => {
    //   this.photo = reader.result.toString();
    // };

      reader.readAsDataURL(file);
    }

    readFile(element){
      this.file = element.target.files[0];
      console.log(this.file);
    }

    uploadFile(){
      this.uploadService.uploadImage(this.file).subscribe((data)=>{
        console.log(data);
        
      }, err=>{
        console.log(err);
      })
    }
    



     


    
//     this.dataService.getProjects().subscribe((data: Project[]) =>
//     {
//       console.log(data);
//       this.projectsArr = data;
//     });
//     this.test = this.dataService.addingPhotos
//     console.log(this.test[0].webViewPath)
}

// listenToNewProjects(){
//    this.uploadService.populateProjects();
//    console.log(this.projectsList)
// }


