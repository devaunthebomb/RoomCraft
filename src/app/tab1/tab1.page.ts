import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Project } from '../services/project'
import { UploadService } from '../services/upload.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  projectsArr : Project[] = [];
  // public projectsList:any[] = [];
  // subcription: Subscription;
  test: any = []
  
  display: any;
  constructor(private dataService : DataService, private uploadService: UploadService) {
    // console.log(this.uploadService.listOfProjectsObs)
    // this.subcription = this.uploadService.listOfProjectsObs.subscribe((data)=>{
    //   this.projectsList.push(data);
    //   console.log(data);
    // })
  }
   ngOnInit() {
     this.uploadService.getAllProjects().subscribe((data: any)=>{
       console.log(data);
       this.display = data;
       console.log(this.display.documents)
     })


    
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

}
